import React from 'react'
import { TouchableHighlight, Image, Text, View, StyleSheet, Dimensions } from 'react-native'

export default function CardAlbum(){
  return(
    <TouchableHighlight
      style={styles.cardContainer}
      onPress={() => {}} 
      underlayColor="darkgray"
    >
      <View style={{borderRadius: 5}}>
        <View >
          <Image source={{uri: "https://picsum.photos/150/120"}} style={styles.cardImage} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Album</Text>
          <Text style={{fontSize: 13}}>Artista</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    width: Dimensions.get('screen').width / 2 - 9,
    margin: 5,
    marginHorizontal: 3,
    backgroundColor: '#fff',
    padding: 2
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 5
  },
  cardInfo: {
    padding: 3,
    paddingHorizontal: 10
  }
})