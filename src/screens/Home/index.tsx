import { Alert, Image } from 'react-native';

import * as S from './styles'

import Pikachu from '../../assets/pikachu.png'
import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../services/axios/getPokes';

export interface HomeProps {
    data?: any;
    loading?: boolean;
    error?: string | null;
}


const Home: React.FC<HomeProps> = ({
    data = null,
    // loading = false,
    // error = '',
}) => {
    const [dataPokemons, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getAllPokemons = async () => {
        try {
            setLoading(true);
            const dataResponse = await getPokemons();

            // if (!dataResponse?.data?.results || !Array.isArray(dataResponse)) {
            //     throw new Error("Dados inválidos recebidos da API");
            // }

            setData(dataResponse?.data?.results);
        } catch (err: any) {
            console.error("Erro ao buscar os Pokémons:", err.message);
            setError("Erro ao carregar os Pokémons.");
        } finally {
            setLoading(false);
        }
    };

    console.log(dataPokemons)

    useEffect(() => {
        getAllPokemons();
    }, []);


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