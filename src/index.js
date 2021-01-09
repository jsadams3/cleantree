import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'
const { GITHUB_API_KEY } = process.env

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`
    }
})
const rootEl = document.getElementById('app')

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

render(<Root />, rootEl)
