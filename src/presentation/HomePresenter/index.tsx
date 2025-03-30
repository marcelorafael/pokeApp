import { getPokemons } from '../../services/axios/getPokes';
import { useEffect, useState } from 'react';
import Home from '../../screens/Home';

const HomePresenter = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getAllPokemons = async () => {
    try {
      setLoading(true);
      const dataResponse = await getPokemons();
      
      if (!dataResponse || !Array.isArray(dataResponse)) {
        throw new Error("Dados inválidos recebidos da API");
      }

      setData(dataResponse);
    } catch (err: any) {
      console.error("Erro ao buscar os Pokémons:", err.message);
      setError("Erro ao carregar os Pokémons.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return <Home data={data} loading={loading} error={error} />;
};

export default HomePresenter;
