import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';

import './PlaceForm.css';

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

const UpdatePlace = () => {
    const places = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === places);

    if(!identifiedPlace) {
        return (<div className="center"><h2>could not find!</h2></div>)
    }

    return (
        <form action="" className='place-form'>
            <Input 
                id="title"
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title.'
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            ></Input>
            <Input 
                id="description"
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='min lent 5 chars'
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            ></Input>
            <Button type='submit' disabled={true}>UPDATE Place</Button>
        </form>
    )
}

export default UpdatePlace;