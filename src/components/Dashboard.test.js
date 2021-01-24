import React from "react";
import { shallow } from "enzyme";

import { Dashboard } from "./";

describe("Dashboard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the Header", () => {
    expect(wrapper.find("HeaderContainer").exists());
  });

  it("should render the Repositories", () => {
    expect(wrapper.find("RepositoriesContainer").exists());
  });
});
