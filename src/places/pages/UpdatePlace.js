import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF3UvfYiMPpVP75ESm7Vk3iV_Zw3Ep7Qqbrw&usqp=CAU',
        address: '20 W 34th St, New York, NY 10001',
        description: 'Big ass building',
        location: {
            lat: 41.999,
            lng: -72.0101,
        }, 
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF3UvfYiMPpVP75ESm7Vk3iV_Zw3Ep7Qqbrw&usqp=CAU',
        address: '20 W 34th St, New York, NY 10002',
        description: 'Big ass building',
        location: {
            lat: 41.999,
            lng: -72.0101,
        }, 
        creator: 'u2',
    }
]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const places = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false,
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === places);

    useEffect(() => {
        if(identifiedPlace){
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true,
                }
            }, true);
            setIsLoading(false);
        }
    }, [setFormData, identifiedPlace]);
        
    const placeUpdateSubmitHandler = event => {
        event.preventDefault();

        console.log(formState.inputs);
    }

    if(!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>could not find!</h2>
                </Card>
            </div>
        )
    }

    if(isLoading) {
        return (<div className="center"><h2>Loading...</h2></div>)
    }

    return (
        formState.inputs.title.value && 
        <form action="" className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id="title"
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title.'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            ></Input>
            <Input 
                id="description"
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='min lent 5 chars'
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            ></Input>
            <Button type='submit' disabled={!formState.isValid}>UPDATE Place</Button>
        </form>
    )
}

export default UpdatePlace;