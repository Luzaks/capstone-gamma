import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, CardMenu, Catalog, MenuItem, MenuItemStart, MenuItemEnd,
} from '../styles/StyledComponents';
import PhotoListHelper from '../components/helpers/photoListHelper';
import CameraFilter from '../components/photoComponents/CameraFilter';
import infoMenuHelper from '../components/helpers/infoMenuHelper';
import visitedHelper from '../components/helpers/visitedHelper';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const PhotosList = ({
  visitedState, solState, cameras, filterState,
}) => {
  const dispatch = useDispatch();
  const roverState = useSelector(state => state.rover);

  return (
    <Card>
      <CardMenu>
        <MenuItemEnd>
          { infoMenuHelper(solState, roverState) }
        </MenuItemEnd>
        <MenuItem>
          <CameraFilter filterState={filterState} dispatch={dispatch} cameras={cameras} />
        </MenuItem>
        <MenuItemStart>
          { visitedHelper(visitedState, roverState) }
        </MenuItemStart>
      </CardMenu>
      <Card>
        <Catalog>
          { PhotoListHelper(filterState, roverState, dispatch) }
        </Catalog>
      </Card>
    </Card>
  );
};

PhotosList.propTypes = {
  cameras: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterState: PropTypes.string.isRequired,
  visitedState: PropTypes.number.isRequired,
  solState: PropTypes.string.isRequired,
};

export default PhotosList;
