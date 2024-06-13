import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    position: 'absolute'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    lineHeight: 38
  },
  textAndCrown: {
    borderColor: '#ffffff',
    width: width * 0.4,
    alignSelf: 'center',
    marginTop: height * 0.05
  },
  crown: {
    left: Platform.OS == 'android' ? '80%' : '75%'
  },
  tastyFood: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 40,
    textDecorationLine: 'underline',
    textDecorationColor: '#FF8D05',
    textAlign: 'left',
  },
  start: {
    fontSize: 40,
  },
  textAndSnowIcon: {
    flexDirection: 'row',
    marginTop: height * 0.45,
    marginLeft: 20
  },
  snowIcon: {
    position: 'absolute',
    bottom: 10,
    left: width * 0.52
  },
  signinText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  signTouch: {
    width: width * 0.8,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#FF8D05',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  dontHaveAccountText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});

export default styles