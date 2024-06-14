import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: height * 0.08,
        paddingHorizontal: 34
    },
    logoAndAvatar: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconAndDot: {
        width: 40,
        height: 40,
        // borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#FD4B33',
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(253,75,51, 0.8)'
    },
    avatar: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 30,
        marginTop: 40,
        fontWeight: '300'
    },
    burgerFor: {
        fontWeight: '700',
    },
    burgerImage: {
        width: 40,
        height: 30,
        marginLeft: 20,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        left: Platform.OS == 'android' ? '60%' : '55%'

    },
    titleAndImage: {
        flexDirection: 'row',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#eee',
        borderRadius: 10,
        paddingLeft: 20,
        marginTop: 35
    },
    input: {
        marginLeft: 10
    },
    categoryImage: {
        width: 20,
        height: 20
    },
    categoryContainer: {
        flexDirection: 'row',
        width: width * 0.25,
        height: 45,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: '100%',
        justifyContent: 'center',
        gap: 10,
        marginRight: 20
    },
    categoryScroll: {
        marginTop: 30,
        height: 45,
    },
    mostPopText: {
        marginTop: 30,
        fontWeight: '600',
        fontSize: 20
    },
    burgerContainer: {
        width: width * 0.4,
        height: height * 0.3,
        marginRight: 20,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    burger: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    imageContainer: {
        height: '40%',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10
    },
    burgerName: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default styles