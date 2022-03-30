import React from 'react';
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react';
import { data } from '../fakeData/fakeData';

const Food = () => {
    const [ values, setValues ] = useState();
    const router = useRouter()
    console.log(router);
    const {food} = router.query;
    useEffect(() => {
        setValues(data)
    }, [])

    console.log(values);

    const newValue = values?.find( item => item.name === food);

    console.log(newValue);
    
    return (
        <div>
            {food}
            <h3>Name : {newValue?.name}</h3>
            <h5>Category : {newValue?.categoryName}</h5>
        </div>
    );
};

export default Food;