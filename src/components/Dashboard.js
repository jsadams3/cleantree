import React from 'react'

import { HeaderContainer, RepositoriesContainer } from '../containers'

const Dashboard = ({ searchTerm }) => {
    return (
        <div>
            <HeaderContainer searchTerm={searchTerm} />
            <RepositoriesContainer searchTerm={searchTerm} />
        </div>
    )
}

export default Dashboard
