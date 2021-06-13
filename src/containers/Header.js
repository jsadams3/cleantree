import React from 'react'

import { Header } from '../components'
import { createOrgQuery } from '../queries'

const HeaderContainer = ({ searchTerm }) => {
  const { loading, error, data } = createOrgQuery({
    orgName: searchTerm,
  })

  if (loading) return null
  if (error) {
    return <p>{`Couldn't find an organization with the name ${searchTerm}`}</p>
  }
  const {
    organization: { avatarUrl, Orgname, description },
  } = data
  return (
    <Header avatarUrl={avatarUrl} name={Orgname} description={description} />
  )
}

export default HeaderContainer
