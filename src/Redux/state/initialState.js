const initialState = {
  rover: {
    rover_name: '',
    loading: false,
    photos: [],
    sol: 0,
    error: ''
  },
  filter: 'ALL',
  cameras: ['ALL'],
  photo: {}
};

export default initialState;