import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './Home.style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoAndAvatar}>
        <View style={styles.iconAndDot}>
          <MaterialCommunityIcons name="text-short" size={24} color="black" />
          <View style={styles.dot} />
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/2._Indian_Man.png",
            }}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.titleAndImage}>
        <Text style={styles.title}>
            {`Find and order\n`}
            <Text style={styles.burgerFor}>burger for you</Text>
        </Text>
        <Image source={require('../../../assets/removeBackground.png')} style={styles.burgerImage} />
      </View>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={24} color="#ccc" />
        <TextInput placeholder='Find Your Burger' style={styles.input} />
      </View>
    </View>
  );
}

export default Home