import React from 'react';
import { shallow } from 'enzyme';
import BowlingArea from './BowlingArea';

it('should match the snap shot', () => {
    const renderedBowlingArea = shallow(<BowlingArea />);
    expect(renderedBowlingArea).toMatchSnapshot();

});

it('should have a default state', () => {
  const renderedBowlingArea = shallow(<BowlingArea />);
  const expectedInitialPins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expectedRemainingPins = [];
  const expectedScoreArr = [];
  const expectedFrameTotal = [];
  const expectedScoreObj = {
    10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    9: [0, 1],
    8: [0, 1, 2],
    7: [0, 1, 2, 3],
    6: [0, 1, 2, 3, 4],
    5: [0, 1, 2, 3, 4, 5],
    4: [0, 1, 2, 3, 4, 5, 6],
    3: [0, 1, 2, 3, 4, 5, 6, 7],
    2: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
  };

  expect(renderedBowlingArea.state('initialPins')).toEqual(expectedInitialPins);
  expect(renderedBowlingArea.state('remainingPins')).toEqual(expectedRemainingPins);
  expect(renderedBowlingArea.state('scoreArr')).toEqual(expectedScoreArr);
  expect(renderedBowlingArea.state('frameTotal')).toEqual(expectedFrameTotal);
  expect(renderedBowlingArea.state('scoreObj')).toEqual(expectedScoreObj);

})
