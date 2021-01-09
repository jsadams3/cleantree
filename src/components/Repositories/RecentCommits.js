import React from 'react'
import { formatDateString } from '../../utils'

const RecentCommits = ({ node: { author, committedDate, message } }) => {
    const displayDate = formatDateString(committedDate)
    return (
        <div className="commit-container">
            <img
                src={author.avatarUrl}
                className="commit-author-avatar"
                alt={author.name}
            ></img>
            <div className="commit">
                <p className="commit-message">{message}</p>
                <span className="commit-info">
                    <p className="commit-author-name">{author.name}</p>
                    <span>{` committed on ${displayDate}`}</span>
                </span>
            </div>
        </div>
    )
}

export default RecentCommits
