import { Alert, Image, View } from 'react-native';

import * as S from './styles'

import Pikachu from '../../assets/pokeball2.png'
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

            // if (!dataResponse?.data?.results || !Array.isArray(dataResponse)) {
            //     throw new Error("Dados inválidos recebidos da API");
            // }

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

        
        
        // setDataPokemonsIndividual

        return data2.data
    }


    let dataaki: any = []

    useEffect(() => {
        getAllPokemons();

        // (async () => {
        //     const random = Math.floor(Math.random() * 20)

        //     const data = await handleGetIndividualPokemons(dataPokemons[random].url)

        //     const data1 = await handleGetIndividualPokemons(dataPokemons[random + 1].url)

        //     dataaki = [data, data1]

        //     setDataPokemonsIndividual([data, data1])
        // })()


    }, []);

    console.log('dataPokemonsIndividual: ', JSON.stringify(dataPokemonsIndividual))
    // getIndividualPokemons

    return (
        <S.Wrapper>
            <S.Header>
                <Image source={Pikachu} style={{ width: 200, height: 200 }} />
            </S.Header>

            <View>
                <S.CenterView>
                    <>



                        {dataPokemonsIndividual?.map((item: any, index: any) => (
                            <S.CardsView key={index}>
                                <S.TextCard>{item?.name.toUpperCase()}</S.TextCard>
                                <S.TextCard>Altura.: {item?.height}</S.TextCard>
                                <S.TextCard>Peso.: {item?.weight}</S.TextCard>
                                <S.TextCard>Exp.: {item?.base_experience}</S.TextCard>
                                <S.TextCard>Tipo: {item?.types[0]?.type?.name}</S.TextCard>
                                
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