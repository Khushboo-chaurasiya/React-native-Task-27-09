import { StyleSheet } from 'react-native';

export const detailStyles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 8,
        marginVertical: 6,
        paddingBottom : 10,
        paddingTop : 10
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: "10%",
        marginBottom: "10%",
        backgroundColor: '#fff'
    },

    SectionStyle: {
        flexDirection: 'row',

        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff'
    },

    ImageStyle: {
        position: 'absolute',
        right: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    TextBeside: {
        marginLeft: 50,
        fontWeight: 'bold',
        fontSize: 18
    },
    edit: {
        position: 'absolute',
        marginLeft: 10,
        right: 10
    },
    TextBottom: {
        marginLeft: -70,
        marginTop: "12%"
    },
    address: {
        marginTop: 9
    },
    profile : {
        width: 90,
        height: 90,
        borderRadius: 90/ 2
    }

})