import React, { useState } from 'react'

import { createRepoQuery } from '../queries'
import { Repositories } from '../components'

const RepositoriesContainer = ({ searchTerm }) => {
  const [sortDir, setSortDir] = useState('forks')
  const { data, error, fetchMore, loading } = createRepoQuery({
    orgName: searchTerm,
    sortDir,
  })

  return (
    <Repositories
      data={data}
      error={error}
      loading={loading}
      fetchMore={fetchMore}
      setSortDir={setSortDir}
      sortDir={sortDir}
    />
  )
}

export default RepositoriesContainer
