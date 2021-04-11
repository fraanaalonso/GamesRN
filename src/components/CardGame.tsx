import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Image, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { GameListInterface } from '../interfaces/interfaces';
import { useNavigation } from '@react-navigation/core';

interface Props {
    heigth?: number;
    width?: number;
    game: GameListInterface
}

export const CardGame = ({game, heigth=420, width=300}: Props) => {

    const uri = game.thumbnail;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={ () => navigation.navigate('GameDetailScreen')}
        >
            <View>
                <Image 
                    source={{
                        uri
                    }}
                    style={{...styles.cardGame, height: heigth, width: width}}
                />
                <Text style={styles.textTitleGame}>{ game.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
