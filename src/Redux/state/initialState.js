const initialState = {
  rover: {
    rover_name: '',
    loading: false,
    photos: [],
    sol: 'Choose..',
    error: ''
  },
  filter: 'ALL',
  cameras: ['ALL'],
  photo: {}
};

export default initialState;