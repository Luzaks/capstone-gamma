import React from 'react';
import { ParMenu } from '../../styles/StyledComponents';

const visitedHelper = (visitedState, roverState) => {
  const visitedNone = (
    <ParMenu>
      Last visited:
      None
    </ParMenu>
  );
  const visitedInfo = (
    <ParMenu>
      Last visited:
      {' '}
      {visitedState}
    </ParMenu>
  );
  if (visitedState === 0 && roverState.rover_name !== '' && roverState.photos.length !== 0 && roverState.sol !== 'Choose..') return visitedNone;
  if (visitedState !== 0 && roverState.rover_name !== '' && roverState.photos.length !== 0 && roverState.sol !== 'Choose..') return visitedInfo;
  return <div />;
};

export default visitedHelper;
