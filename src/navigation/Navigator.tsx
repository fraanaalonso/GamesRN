import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GameListScreen } from '../screens/GameListScreen';
import { GameDetailScreen } from '../screens/GameDetailScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="GameListScreen" component={GameListScreen} />
      <Stack.Screen name="GameDetailScreen" component={GameDetailScreen} />
    </Stack.Navigator>
  );
}