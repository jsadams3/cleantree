import React, { useState } from 'react'
import Loader from 'react-loader-spinner'

import { BsCircleFill } from 'react-icons/bs'
import { BiStar, BiGitRepoForked } from 'react-icons/bi'
import { GoIssueOpened } from 'react-icons/go'

import { RecentCommits, RepoStat, LoadMoreButton } from './'

const RepoData = ({ node }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {
    name,
    description,
    primaryLanguage,
    url,
    forkCount,
    stargazerCount,
    issues,
    masterBranch,
  } = node

  const toggleSidebar = (e) => {
    e.preventDefault()
    setSidebarOpen((prevState) => !prevState)
  }

  return (
    <div className="repo-data-container">
      <div>
        <a href={url} className="row-name">
          {name}
        </a>
        <p className="row-description">{description}</p>
        <div className="repo-data">
          {primaryLanguage && (
            <RepoStat
              icon={<BsCircleFill fill={primaryLanguage.color} stroke="none" />}
              text={primaryLanguage.name}
            />
          )}
          <RepoStat icon={<BiStar />} text={stargazerCount} />
          <RepoStat icon={<BiGitRepoForked />} text={forkCount} />
          <RepoStat icon={<GoIssueOpened />} text={issues.totalCount} />
        </div>
      </div>
      <div className="sidebar-container">
        <button className="button commit-button" onClick={toggleSidebar}>
          {sidebarOpen ? 'Close' : 'Browse recent commits'}
        </button>
        {sidebarOpen && (
          <div className="sidebar">
            <h3>Commits</h3>
            {masterBranch.target.history.edges.map((edge, index) => (
              <RecentCommits key={index} node={edge.node} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const Repositories = ({
  data,
  error,
  loading,
  fetchMore,
  setSortDir,
  sortDir,
  isLoadingMore,
  setIsLoadingMore,
}) => {
  if (loading && !data) {
    return (
      <Loader
        type="Oval"
        color="#B3CBFF"
        height={32}
        width={32}
        className="loader"
      />
    )
  }
  if (error) {
    return <p className="repositories-error-message">No repositories found</p>
  }

  const {
    search: {
      pageInfo: { hasNextPage, endCursor },
    },
  } = data

  const renderReposData = () => {
    return data.search.edges.map((edge, index) => {
      const { node } = edge
      return (
        <li key={index} className="data-row">
          <RepoData node={node} />
        </li>
      )
    })
  }

  const handleSortClick = (e) => {
    setSortDir(e.target.value)
  }

  return (
    <div className="app">
      <div className="sort-select-container">
        <select
          value={sortDir}
          onChange={handleSortClick}
          className="sort-select"
        >
          <option value="forks" className="sort-select-option">
            Forks
          </option>
          <option value="interactions" className="sort-select-option">
            Interactions
          </option>
        </select>
      </div>
      <div className="repositories-container">
        <h2>Repositories</h2>
        <ul className="repositories-list">{renderReposData()}</ul>
      </div>
      {hasNextPage && (
        <LoadMoreButton
          endCursor={endCursor}
          fetchMore={fetchMore}
          loading={loading}
        />
      )}
    </div>
  )
}

export default Repositories
