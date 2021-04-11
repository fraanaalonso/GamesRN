import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    globalMargin: {
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'helvetica'
    },
    cardGame: {
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 4,
    },

    viewCarousel:{
        height: 440,
    },
    loading:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    textTitleGame:{
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',


    },
    itemBtn: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    bottomText:{
        fontWeight: 'bold',
        fontSize: 20
    }
});