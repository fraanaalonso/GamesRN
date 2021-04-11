
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GameDetailScreen } from '../screens/GameDetailScreen';
import { GameListScreen } from '../screens/GameListScreen';

const Stack = createStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GameListScreen" component={GameListScreen} />
      <Stack.Screen name="GameDetailScreen" component={GameDetailScreen} />
    </Stack.Navigator>
  );
}