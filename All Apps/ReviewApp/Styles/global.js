import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        marginBottom: "2%",
        marginHorizontal: "5%",
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff'
    },

    ImageStyle: {
        position: 'absolute',
        marginLeft: 10,
        right: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    ButtonViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#15ddf1',
        borderRadius: 50,
        marginRight: 30,
        marginLeft: 30,
        height: 50
    },
    checkboxContainer: {
        flexDirection: "row",
        marginLeft: 25
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    forgotLabel: {
        textAlign: 'right',
        margin: 8,
        marginLeft: 100
    },
    TextBottom: {
        marginTop: 10,
        textAlign: 'center'
    }
})