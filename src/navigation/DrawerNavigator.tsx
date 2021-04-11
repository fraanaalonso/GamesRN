import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GameListScreen } from '../screens/GameListScreen';
import { Tabs } from './Navigator';
import { styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerType={ width >= 768 ? 'permanent' : 'front'}
            drawerContent={ (props) => <DrawerMenu {...props} />}
            overlayColor="transparent"
            drawerStyle={{
                backgroundColor: '#eff6f7',
                width: 240,
                borderWidth: 1,
              }}
        >
            <Drawer.Screen name="All" component={Tabs} />
            <Drawer.Screen name="MMO" component={Tabs} />
            <Drawer.Screen name="MMORPG" component={Tabs} />
            <Drawer.Screen name="Shooter" component={Tabs} />
            <Drawer.Screen name="Strategy" component={Tabs} />
        </Drawer.Navigator>
    )
}


const DrawerMenu = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
      <DrawerContentScrollView>
          <View
            style={styles.globalMargin}
          >
                <TouchableOpacity
                    style={styles.itemBtn}
                    onPress={ () => navigation.navigate('All')}
                >
                <Icon name="bookmark-outline" size={30} style={styles.iconMenu} color="#ab250d" />
                <Text style={{...styles.title}}>All Games</Text>
                  

              </TouchableOpacity>
              <TouchableOpacity
                    style={styles.itemBtn}
                    onPress={ () => navigation.navigate('MMO')}
                >
                <Icon name="people-outline" size={30} style={styles.iconMenu} color="#8dc212" />
                <Text style={{...styles.title}}>MMO</Text>
                  

              </TouchableOpacity>
              <TouchableOpacity
                    style={styles.itemBtn}
                    onPress={ () => navigation.navigate('MMORPG')}
                >
                <Icon name="earth-outline" size={30} style={styles.iconMenu} color="#097476" />
                <Text style={{...styles.title}}>MMORPG</Text>
                  

              </TouchableOpacity>
              <TouchableOpacity
                    style={styles.itemBtn}
                    onPress={ () => navigation.navigate('Shooter')}
                >
                <Icon name="skull-outline" size={30} style={styles.iconMenu} color="#341104" />
                <Text style={{...styles.title}}>Shooter</Text>
                  

              </TouchableOpacity>
              <TouchableOpacity
                    style={styles.itemBtn}
                    onPress={ () => navigation.navigate('Strategy')}
                >
                <Icon name="trophy-outline" size={30} style={styles.iconMenu} color="#d6ba15" />
                <Text style={{...styles.title}}>Strategy</Text>
                  

              </TouchableOpacity>
          </View>
      </DrawerContentScrollView>
    
  );
}