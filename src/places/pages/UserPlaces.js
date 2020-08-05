import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF3UvfYiMPpVP75ESm7Vk3iV_Zw3Ep7Qqbrw&usqp=CAU',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 41.999,
            lng: -72.0101,
        }, 
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF3UvfYiMPpVP75ESm7Vk3iV_Zw3Ep7Qqbrw&usqp=CAU',
        address: '20 W 34th St, New York, NY 10002',
        location: {
            lat: 41.999,
            lng: -72.0101,
        }, 
        creator: 'u2',
    }
]

const UserPlaces = () => {

    return <PlaceList items={DUMMY_PLACES}></PlaceList>
};

export default UserPlaces;