import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GameListScreen } from '../screens/GameListScreen';
import { GameDetailScreen } from '../screens/GameDetailScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { GamePCScreen } from '../screens/GamePCScreen';
import { GameWebScreen } from '../screens/GameWebScreen';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
    return Platform.OS === 'ios'
    ? <TabIOS />
    : <TabAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();
const BottomTabIOs = createBottomTabNavigator();

const TabAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{ backgroundColor: '#e9b69f' }}
            screenOption={
                ({route}) => ({
                    tabBarIcon: ({color, focused}) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'GameListScreen':
                                return  <Icon name='logo-windows' size={25} color="#900"/>
                                break;
                            case 'GamePCScreen':
                                return  <Icon name='logo-windows' size={25} color="#900"/>
                                break;
                            case 'GameWebScreen':
                                return  <Icon name='logo-windows' size={25} color="#900"/>
                                break;
                                            
                            
                        }
                        return <Text style={{color}}>{iconName}</Text>
                    }
                })
            }
        >    
          <BottomTabAndroid.Screen name="GameListScreen" options={{ title: 'All'}} component={GameListScreen}  />
          <BottomTabAndroid.Screen name="GamePCScreen" options={{ title: 'PC'}} component={GamePCScreen} />
          <BottomTabAndroid.Screen name="GameWebScreen" options={{ title: 'Web'}} component={GameWebScreen} />           
        </BottomTabAndroid.Navigator>
      );
}


const TabIOS = () => {
    return (
        <BottomTabIOs.Navigator
            initialRouteName='GameListScreen'

        >
          <BottomTabIOs.Screen name="GameListScreen" component={GameListScreen} />
          <BottomTabIOs.Screen name="GameDetailScreen" component={GameDetailScreen} />
        </BottomTabIOs.Navigator>
      );
}