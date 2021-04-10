import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import gamesFree from '../api/getGames';
import { GameListInterface } from '../interfaces/interfaces';
import { styles } from '../themes/appTheme';


export const GameListScreen = () => {

    const [games, setgames] = useState({});

    const getGames = async() => {
        const resp = await gamesFree.get<GameListInterface>('/');
        console.log(resp.data[0])
        setgames(resp.data);
    }

    useEffect(() => {
        getGames();
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Lista de Juegos</Text>

            <Text>
                
            {
                JSON.stringify(games, null, 2)
            }
            </Text>
        </View>
    )
}
