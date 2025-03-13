import { Image } from 'react-native';

import * as S from './styles'

import Pikachu from '../assets/pikachu.png'

interface HomeProps {
    data?: any
}

const Home = ({
    data
}: HomeProps) => {

    return (
        // <View style={{ flex: 1, backgroundColor: '#DD1234' }}>
        //     <Image source={Pikachu} style={{width: 300, height: 300}} />
        // </View>
        <S.Wrapper>
            <S.Header>
                <Image source={Pikachu} style={{ width: 200, height: 200, marginRight: 50 }} />
            </S.Header>

            <S.CenterView>
                <>
                    <S.CardsView></S.CardsView>
                    <S.CardsView></S.CardsView>
                </>
            </S.CenterView>

            <S.SearchView>
                <S.ButtonSearch>
                    <S.TitleButton>{data}</S.TitleButton>
                </S.ButtonSearch>
            </S.SearchView>
        </S.Wrapper>
    );
}

export default Home