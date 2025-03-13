import { getPokemons } from '../../services/axios/getPokes';
import { useEffect, useState } from 'react';

import Home from '../../screens/Home';
import { View } from 'react-native';
import { Text } from '@react-navigation/elements';

export default function HomePresenter() {
    const [data, setData] = useState('null')

    useEffect(() => {
        const dataResponse: any = getPokemons()

        setData(dataResponse)
        console.log('teste')
    }, [])



    return (
        <Home data='{data}' />
    );
}