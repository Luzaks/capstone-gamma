import Axios from 'axios';

const rover = 'opportunity';
const sol = '10';
const APIkey = '0DQdoReiu09VZ7KRIb07wks4D7xiFNqWC6jZk4ip';

const fetch = Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${APIkey}`)
    .then((r) => {
        console.log(r.data);
    })
    .catch(onerror => {

    });

export default fetch;