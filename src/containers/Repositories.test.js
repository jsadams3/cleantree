import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'

import { SEARCH_FOR_REPOS } from '../queries'
import { repoResponseData } from '../fixtures'
import { RepositoriesContainer } from './'

const mocks = [
  {
    request: {
      query: SEARCH_FOR_REPOS,
      variables: { queryString: 'org:netflix sort:forks-desc' },
    },
    result: {
      repoResponseData,
    },
  },
]

describe('RepositoriesContainer', () => {
  it('should render Render the component', () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={true}>
        <RepositoriesContainer searchTerm="forks" />
      </MockedProvider>,
    )

    expect(wrapper.find('Repositories').exists())
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
