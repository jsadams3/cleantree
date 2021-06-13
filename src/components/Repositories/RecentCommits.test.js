import React from 'react'
import { shallow } from 'enzyme'
import { RecentCommits } from './'
import { formatDateString } from '../../utils'

const props = {
  author: {
    avatarUrl: 'http://via.placeholder.com/640x360',
    name: 'Bronwyn',
  },
  committedDate: '2020-11-09T01:01:59.975Z',
  message: '',
}
describe('RecentCommits', () => {
  it('should render the component', () => {
    const component = shallow(<RecentCommits node={props} />)

    expect(component).toMatchSnapshot()
  })

  it('should take an ISO-8601 encoded UTC date string and format it correctly', () => {
    const ISODateString = '2020-11-10T16:20:13.750Z'
    expect(formatDateString(ISODateString)).toEqual('November 10, 2020')
  })
})
