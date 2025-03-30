import { Alert, Image, View } from 'react-native';

import * as S from './styles'

import Pikachu from '../../assets/Pokémon_logo.png'
import React, { useEffect, useState } from 'react';
import { getPokemons, getIndividualPokemons } from '../../services/axios/getPokes';

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
    const [dataPokemons, setDataPokemons] = useState<any>([]);
    const [dataPokemonsIndividual, setDataPokemonsIndividual] = useState<any>([]);
    // const [dataPokemonIndividual2, setDataPokemonsIndividual2] = useState<any>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [random, setRandom] = useState<number>(Math.floor(Math.random() * 20));


    const getAllPokemons = async () => {
        try {
            setLoading(true);
            const dataResponse: any = await getPokemons();

            setDataPokemons(dataResponse?.data?.results);



            const random = Math.floor(Math.random() * 20)

            const dataIndividual1 = await handleGetIndividualPokemons(dataPokemons[random]?.url)

            const dataIndividual2 = await handleGetIndividualPokemons(dataPokemons[random + 1]?.url)

            setDataPokemonsIndividual([dataIndividual1, dataIndividual2])


        } catch (err: any) {
            console.error("Erro ao buscar os Pokémons:", err.message);
            setError("Erro ao carregar os Pokémons.");
        } finally {
            setLoading(false);
        }
    };

    async function handleGetIndividualPokemons(data: any) {
        const data2: any = await getIndividualPokemons(data)

        return data2.data
    }


    let dataaki: any = []

    useEffect(() => {
        getAllPokemons();

    }, []);

    return (
        <S.Wrapper>
            <S.Header>
                <Image source={Pikachu} style={{ width: 250, height: 90 }} />
            </S.Header>

            <View>
                <S.CenterView>
                    <>



                        {dataPokemonsIndividual?.map((item: any, index: any) => (
                            <S.CardsView key={index}>
                                <S.TextCard>{item?.name.toUpperCase()}</S.TextCard>
                                <View style={{ display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <S.MiniText>Altura:</S.MiniText>
                                    <S.TextCard> {item?.height}</S.TextCard>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <S.MiniText>Peso:</S.MiniText>
                                    <S.TextCard> {item?.weight}</S.TextCard>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <S.MiniText>Exp.:</S.MiniText>
                                    <S.TextCard> {item?.base_experience}</S.TextCard>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <S.MiniText>Tipo:</S.MiniText>
                                    <S.TextCard> {item?.types[0]?.type?.name}</S.TextCard>
                                </View>
                                


                                <Image source={{
                                    uri: item?.sprites?.front_default
                                }} width={200} height={200} style={{ position: 'absolute', top: -120, left: -7 }} />
                            </S.CardsView>
                        ))}



                    </>
                </S.CenterView>

                <S.SearchView>
                    <S.ButtonSearch>
                        <S.TitleButton>Pesquisar</S.TitleButton>
                    </S.ButtonSearch>
                </S.SearchView>
            </View>
        </S.Wrapper>
    );
}

export default Home