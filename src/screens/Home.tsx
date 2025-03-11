import { View, Image } from 'react-native';

import Pikachu from '../assets/pikachu.png'

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#DD1234' }}>
            <Image source={Pikachu} style={{width: 300, height: 300}} />
        </View>
    );
}

export default Home