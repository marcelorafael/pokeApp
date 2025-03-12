import { View, Image } from 'react-native';

import * as S from './styles'

import Pikachu from '../assets/pikachu.png'

const Home = () => {
    return (
        // <View style={{ flex: 1, backgroundColor: '#DD1234' }}>
        //     <Image source={Pikachu} style={{width: 300, height: 300}} />
        // </View>
        <S.Wrapper>
            <S.Header>
                <Image source={Pikachu} style={{ width: 200, height: 200, marginRight: 50 }} />
            </S.Header>

            <S.CenterView>
                <S.CardsView></S.CardsView>
                <S.SearchView></S.SearchView>
            </S.CenterView>
        </S.Wrapper>
    );
}

export default Home