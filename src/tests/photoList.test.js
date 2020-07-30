import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotosList from '../containers/PhotosList';
import filterPhotosHelper from '../components/helpers/filterPhotosHelper';
import infoMenuHelper from '../components/helpers/infoMenuHelper';
import visitedHelper from '../components/helpers/visitedHelper';
import PhotoListHelper from '../components/helpers/photoListHelper';
import photoListMock from './mocks/helperMocks/photoListMock';

const { result } = renderHook(() => PhotosList);
const roverState = {
  rover_name: 'Curiosity',
  photos: [
    {
      camera: {
        name: 'RHAZ',
      },
      id: 1,
    },
    {
      camera: {
        name: 'NAVCAM',
      },
      id: 2,
    },
  ],
  sol: 10,
  loading: false,
};
const dispatch = 'dispatch';
const visitedState = 123;

test('the prescense of attributes of the PhotoList compoment.', () => {
  expect(typeof result.current).toBe('function');
  expect(typeof result).toBe('object');
});

test('the rendering of photoList component.', () => {
  const rendered = expect(result).toBeVisible;
  expect(rendered).not.toThrow('Error');
  expect(typeof rendered).toBe('function');
});

describe('the logic of the photos filter according to camera.', () => {
  test('the returned photos when we want to show All of them.', () => {
    const allReturned = filterPhotosHelper('ALL', roverState);
    expect(allReturned.length).toStrictEqual(2);
  });
  test('the returned photos when we want to show SOME of them.', () => {
    const someReturned = filterPhotosHelper('RHAZ', roverState);
    expect(someReturned.length).toStrictEqual(1);
  });
  test('the returned photos when there are not photos of that camera.', () => {
    const nothingReturned = filterPhotosHelper('MINITES', roverState);
    expect(nothingReturned.length).toStrictEqual(0);
  });
});

describe('the logic of the menu helper according to rover and sol.', () => {
  test('the returned element with initial sol state.', () => {
    const returnedMenu = infoMenuHelper('Choose..', roverState);
    expect(returnedMenu).toStrictEqual(<div />);
  });
  test('the returned element with not initial sol state.', () => {
    const returnedMenu = infoMenuHelper('10', roverState);
    expect(returnedMenu).not.toBe(<div />);
  });
});

describe('the logic of the visited helper according to photo visited.', () => {
  test('the returned element with initial visited state.', () => {
    const returnedVisited = visitedHelper(0, roverState);
    const { getAllByText } = render(returnedVisited);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'Last visited: None',
    );
    expect(node.textContent).toBe('Last visited: None');
  });
  test('the returned element with not initial visited state.', () => {
    const returnedVisited = visitedHelper(visitedState, roverState);
    const { getAllByText } = render(returnedVisited);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'Last visited: 123',
    );
    expect(node.textContent).toBe('Last visited: 123');
  });
});

describe('the logic of the photoListHelper.', () => {
  test('the returned element with no photos for one day.', () => {
    const roverState1 = {
      rover_name: 'Curiosity',
      photos: [],
      sol: 7,
      loading: false,
      error: '',
    };
    const photosReturned = PhotoListHelper('ALL', roverState1, dispatch);
    const { getAllByText } = render(photosReturned);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'There are not photos for this day.',
    );
    expect(node.textContent).toBe('There are not photos for this day.');
  });
  test('the returned element with no photos for one camera.', () => {
    const roverState2 = {
      rover_name: 'Spirit',
      photos: [
        {
          camera: {
            name: 'RHAZ',
          },
        },
        {
          camera: {
            name: 'NAVCAM',
          },
        },
      ],
      sol: 1,
      loading: false,
      error: '',
    };
    const photosReturned = PhotoListHelper('MINITES', roverState2, dispatch);
    const { getAllByText } = render(photosReturned);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'There are no photos for this camera.',
    );
    expect(node.textContent).toBe('There are no photos for this camera.');
  });
  test('the returned element with loading element.', () => {
    const roverState3 = {
      rover_name: '',
      photos: [],
      sol: 'Choose..',
      loading: true,
      error: '',
    };
    const elementReturned = PhotoListHelper('ALL', roverState3, dispatch);
    const { container } = render(elementReturned);
    expect(container.firstChild.firstChild.firstChild).toMatchInlineSnapshot(`
       <span
         class="circle circle-1"
       />
    `);
  });
  test('the returned element with loading element.', () => {
    const roverState4 = {
      rover_name: '',
      photos: [],
      sol: 'Choose..',
      loading: false,
      error: '',
    };
    const elementReturned = PhotoListHelper('ALL', roverState4, dispatch);
    const { getAllByText } = render(elementReturned);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'Choose a rover, pick a day (from one to one hundred) and click on see button to show images.',
    );
    expect(node.textContent).toBe('Choose a rover, pick a day (from one to one hundred) and click on see button to show images.');
  });
  test('the returned element with error element.', () => {
    const roverState5 = {
      rover_name: '',
      photos: [],
      sol: 'Choose..',
      loading: false,
      error: 'Error',
    };
    const elementReturned = PhotoListHelper('ALL', roverState5, dispatch);
    const { getAllByText } = render(elementReturned);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'Error',
    );
    expect(node.textContent).toBe('Error');
  });
  test('the returned element with photolist.', () => {
    const photoListReturned = photoListMock('ALL', roverState);
    const { getAllByText } = render(photoListReturned);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'Photo: 1',
    );
    expect(node.textContent).toBe('Photo: 1');
  });
});
