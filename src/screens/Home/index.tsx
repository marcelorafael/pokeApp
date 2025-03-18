import { Alert, Image } from 'react-native';

import * as S from './styles'

import Pikachu from '../../assets/pikachu.png'

export interface HomeProps {
    data?: any;
    loading?: boolean;
    error?: string | null;
}


const Home = ({
    data = null,
    loading = false,
    error = '',
}: HomeProps) => {

    console.log("data: ", data)

    return (
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
                    <S.TitleButton>Pesquisar</S.TitleButton>
                </S.ButtonSearch>
            </S.SearchView>
        </S.Wrapper>
    );
}

export default Home