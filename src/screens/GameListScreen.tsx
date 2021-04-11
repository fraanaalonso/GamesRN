import React from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CardGame } from '../components/CardGame';
import { styles } from '../themes/appTheme';
import Carousel from 'react-native-snap-carousel';
import { useGames } from '../hooks/useGames';


const { width: windowWidth } = Dimensions.get('window')
export const GameListScreen = () => {

    const { games, isLoading } = useGames();
    const {top} = useSafeAreaInsets();

    if( isLoading ){
        return (<View style={styles.loading}>
            <ActivityIndicator color='red' size={100}/>
        </View>)
        
    }

    return (
    <ScrollView>
        <View style={{...styles.globalMargin, marginTop: top + 20}}>
            <View
                style={styles.viewCarousel}
            >
                <Carousel 
                    data={games}
                    renderItem={({item}: any) => <CardGame game={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.5}
                />
            
            
            </View>            

            
        </View>
    </ScrollView>
        
    )
}
