import React from 'react'

import { shallow } from 'enzyme'
import { App } from './'

const setHookState = (newState) =>
    jest.fn().mockImplementation(() => [newState, () => {}])

describe('App', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should render the component', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should render two inputs', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('input')).toHaveLength(2)
    })

    it('should not render the Dashboard for initial state', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Dashboard').exists()).toBeFalsy()
    })

    it('should render the Dashboard if showRepos is true', () => {
        const wrapper = shallow(<App />)
        setHookState({
            inputValue: '',
            searchTerm: '',
            showRepos: true
        })
        expect(wrapper.find('Dashboard').exists())
    })
})
