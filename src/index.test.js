// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { detect } from 'detect-browser';
import DetectBrowser from './';

const browser = detect();

describe('DetectBrowser', () => {
  it('should render correctly', () => {
    const children = jest.fn();

    shallow(<DetectBrowser>{children}</DetectBrowser>);

    expect(children).toHaveBeenCalledTimes(1);
    expect(children).toHaveBeenCalledWith({ browser });
  });

  it('should call children with { browser }', () => {
    const children = jest.fn();

    DetectBrowser({ children });

    expect(children).toHaveBeenCalledTimes(1);
    expect(children).toHaveBeenCalledWith({ browser });
  });
});
