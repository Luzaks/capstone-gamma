import React from 'react';
import { ParMenu } from '../../styles/StyledComponents';

const infoMenuHelper = (solState, roverState) => {
  const roverInfo = (
    <ParMenu>
      {roverState.rover_name}
      {' '}
      rover at
      {' '}
      day
      {' '}
      {solState}
    </ParMenu>
  );
  if (solState !== 'Choose..') return roverInfo;
  return <div />;
};

export default infoMenuHelper;
