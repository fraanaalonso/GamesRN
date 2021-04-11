import React, { useEffect, useState } from 'react'
import gamesFree from '../api/getGames';
import { GameListInterface } from '../interfaces/interfaces';

export const useGames = () => {
    
    const [games, setgames] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    

    const getGames = async() => {
        const resp = await gamesFree.get<GameListInterface>('/');
        setgames(resp.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getGames();
    }, []);


    return {
        games,
        isLoading,
        
    }
}
