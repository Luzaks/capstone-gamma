import React from 'react';
import { useSelector } from 'react-redux';

const LandingPage = () => {

    const rover = useSelector(state => state.rover);

    return (
        <div className="row">
            <div className="card">
                {
                    rover.photos.map(item => <img src={item.img_src} alt="mars" />)
                }
            </div>
        </div>
    );
};

export default LandingPage;