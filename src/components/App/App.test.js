import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should match the snap shot', () => {
    const renderedApp = shallow(<App />);
    expect(renderedApp).toMatchSnapshot();

  });
