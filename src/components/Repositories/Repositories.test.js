import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Repositories } from './'
import { repoResponseData } from '../../fixtures'

describe('Repositories', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should render 'Render the component", () => {
    const wrapper = shallow(<Repositories {...repoResponseData} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it("should render 'No repositories found' if there's an error", () => {
    const mockData = {
      data: {},
      error: [],
      fetchMore: jest.fn(),
      loading: false,
      setSortDir: jest.fn(),
      sortDir: 'forks',
    }

    const wrapper = mount(<Repositories {...mockData} />)
    expect(wrapper.find('p').text()).toEqual('No repositories found')
  })

  it('should render a Loader if loading is true', () => {
    const mockData = {
      data: {},
      error: [],
      fetchMore: jest.fn(),
      loading: true,
      setSortDir: jest.fn(),
      sortDir: 'forks',
    }

    const wrapper = mount(<Repositories {...mockData} />)
    expect(wrapper.find('Loader').exists())
  })
})
