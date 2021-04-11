import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GameListScreen } from '../screens/GameListScreen';
import { GameDetailScreen } from '../screens/GameDetailScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { GamePCScreen } from '../screens/GamePCScreen';
import { GameWebScreen } from '../screens/GameWebScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../themes/appTheme';



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
            barStyle={{ backgroundColor: '#ebe4e1', borderTopWidth: 1, }}
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({color, focused, size}) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'GameListScreen':
                                return  <Icon name='grid-outline' size={25} color="#0a0101"/>
                                break;
                            case 'GamePCScreen':
                                return  <Icon name='desktop-outline' size={25} color="#d3460f"/>
                                break;
                            case 'GameWebScreen':
                                return  <Icon name='logo-web-component' size={25} color="blue"/>
                                break;
                                            
                            
                        }
                        return <Text >{iconName}</Text>
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