import React from 'react';
import { shallow, mount } from 'enzyme';
import ScoreBoard from './ScoreBoard';

it('should match the snap shot', () => {
  const renderedScoreBoard = shallow(
      <ScoreBoard scoreArray={[1, 2, 4, 5, 6, 7]} frameTotal={[8, 7, 9, 5]}/>
    );
  expect(renderedScoreBoard).toMatchSnapshot();
})

it('component should receive props', () => {
  const mockScoreArray = [1, 2, 4, 5, 6, 7];
  const mockFrameTotalArray = [8, 7, 9, 5];
  const renderedScoreBoard = mount(
    <ScoreBoard scoreArray={mockScoreArray} frameTotal={mockFrameTotalArray}/>
  )
  expect(renderedScoreBoard.props().scoreArray).toEqual(mockScoreArray);
  expect(renderedScoreBoard.props().frameTotal).toEqual(mockFrameTotalArray);
})
