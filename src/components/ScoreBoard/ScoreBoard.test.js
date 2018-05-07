import React from 'react';
import { shallow } from 'enzyme';
import ScoreBoard from './ScoreBoard';

it.skip('should match the snap shot', () => {
  const renderedScoreBoard = shallow(<ScoreBoard scoreArra={[]} frameTotal={[]}/>);
  expect(renderedScoreBoard).toMatchSnapshot();
})
