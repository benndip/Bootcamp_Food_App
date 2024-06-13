import { View, Text, SafeAreaView, Image, StatusBar, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Landing.style'
import { FontAwesome } from '@expo/vector-icons';

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={Platform.OS == "android" ? "dark-content" : "light-content"}
      />
      <Image
        style={styles.image}
        source={require("../../../assets/landingImage.jpg")}
      />
      <View style={styles.textAndCrown}>
        <Image
          source={require("../../../assets/crown.png")}
          style={styles.crown}
        />
        <Text style={styles.title}>Burger</Text>
        <Text style={styles.title}>Queen</Text>
      </View>
      <View style={styles.textAndSnowIcon}>
        <Text style={styles.tastyFood}>{`Good Food\nTasty Food`}</Text>
        <FontAwesome name="snowflake-o" size={24} color="#FFFFFF" style={styles.snowIcon} />
      </View>
      <TouchableOpacity style={styles.signTouch} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.signinText}>SignIn</Text>
      </TouchableOpacity>
      <Text style={styles.dontHaveAccountText}>Don't have an account? <Text onPress={()=>alert('Hello')} style={styles.signUpText}>Sign Up</Text> </Text>
    </SafeAreaView>
  );
}

export default Landing