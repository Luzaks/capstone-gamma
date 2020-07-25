import React from 'react';
import { Link } from 'react-router-dom';

const LinkPhoto = ({ img }) => {
    return (
        <div className="photo-hover-layer">
            <Link to={ {pathname: `/item/${img.id}`}}>
                <p className="photo-hover-link">
                    See details
                </p>
            </Link>
        </div>
    );
};

export default LinkPhoto;