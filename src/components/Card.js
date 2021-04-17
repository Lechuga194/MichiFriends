import React from 'react';
import 'tachyons'

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className="tc grow bg-light-blue br3 pa3 ma2 bw2 shadow-5 dib" >
            <img src={`https://robohash.org/${id}?set=set4&?size=100x100`} alt="User" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;