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
    }
});

export default styles