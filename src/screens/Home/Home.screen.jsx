import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from './Home.style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const categories = [
  {
    name: 'Beef',
    image: require('../../../assets/beef.jpeg')
  },
  {
    name: 'Cheese',
    image: require('../../../assets/cheese.webp')
  },
  {
    name: 'Shrimp',
    image: require('../../../assets/shrimp.avif')
  }
]

const burgers = [
  {
    name: 'Extra Beef Burger',
    image: require('../../../assets/burger1.png'),
    rating: 4.5,
    distance: 5.4,
    price: 9.90
  },
  {
    name: 'Smoked Beef Burger',
    image: require('../../../assets/burger2.png'),
    rating: 4.5,
    distance: 5.4,
    price: 9.90
  },
  {
    name: 'Any other Burger',
    image: require('../../../assets/burger3.png'),
    rating: 4.5,
    distance: 5.4,
    price: 9.90
  }
]

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
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}  style={styles.categoryScroll} horizontal>
          {categories.map(category=>{
            return (
              <View style={styles.categoryContainer}>
                <Image source={category.image} style={styles.categoryImage} />
                <Text>{category.name}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
      <Text style={styles.mostPopText}>Most Popular</Text>
      <View style={{ marginTop: 30 }}>
          <ScrollView horizontal>
            {burgers.map(b=>{
              return (
                <View style={styles.burgerContainer}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.burger} source={b.image} />
                  </View>
                  <Text style={styles.burgerName}>{b.name}</Text>
                </View>
              )
            })}
          </ScrollView>
      </View>
    </View>
  );
}

export default Home