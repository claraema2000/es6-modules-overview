import React from 'react';

const Watch = ({watch}) => {
    console.log(watch)
    const {name, price} = watch;
    return (
        <div>
            <h3>Watch: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;