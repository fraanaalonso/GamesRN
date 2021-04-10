import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';


export const GameListScreen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Lista de Juegos</Text>
        </View>
    )
}
