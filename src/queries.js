import { useQuery, gql } from '@apollo/client'

export const createOrgQuery = ({ orgName }) => {
    return useQuery(SEARCH_FOR_ORG, {
        variables: { login: orgName }
    })
}

export const createRepoQuery = ({ orgName, sortDir, after, first = 5 }) => {
    return useQuery(SEARCH_FOR_REPOS, {
        variables: {
            queryString: `org:${orgName} sort:${sortDir}-desc`,
            first: first,
            after: after
        },
        notifyOnNetworkStatusChange: true
    })
}

export const SEARCH_FOR_ORG = gql`
    query orgInfo($login: String!) {
        organization(login: $login) {
            avatarUrl
            Orgname: name
            description
        }
    }
`

export const SEARCH_FOR_REPOS = gql`
    query orgRepos($queryString: String!, $first: Int!, $after: String) {
        search(
            query: $queryString
            type: REPOSITORY
            first: $first
            after: $after
        ) {
            repositoryCount
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
            edges {
                cursor

                node {
                    ... on Repository {
                        name
                        forkCount
                        description
                        stargazerCount
                        issues {
                            totalCount
                        }
                        primaryLanguage {
                            color
                            name
                        }
                        url

                        masterBranch: defaultBranchRef {
                            target {
                                ... on Commit {
                                    history(first: 10) {
                                        edges {
                                            node {
                                                ... on Commit {
                                                    message
                                                    committedDate
                                                    author {
                                                        name
                                                        email
                                                        avatarUrl
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
