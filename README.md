# Github Sort

![Project screenshot](https://i.ibb.co/Bn0pkkt/github-screenshot.png)

A React app that displays an organization's Github projects ranked by a sort directive, and allows the user to view recent commits on a project.

## Getting Started

This project uses the GitHub GraphQL API to query for data, which requires an OAuth token. Instructions for creating a token with the required scopes can be found [here](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) and [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).
Once the token has been created, create a `.env` file in the root of the project with the format `GITHUB_API_KEY=<YOUR_TOKEN>`. Webpack will take the token from the `.env` file and add it to the global `process.env` which is used when Apollo Client is created.

### Running locally

- Clone the repo
- Create `.env` file with Github access token
- `yarn install` to install the required dependencies
- `yarn start` to start the local server
- Navigate to `localhost:8080`

### Running tests

`yarn test`

### Formatting

This project uses [prettier](https://www.npmjs.com/package/prettier). To format the code, run `yarn format:pretty`.
