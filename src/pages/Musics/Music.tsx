import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'

import { ContextMenu } from '../../components'

interface MusicProps{
  id?: string
  filename: string
  duration: number
}

const Music: React.FC<MusicProps> = ({filename, duration}) => {
  const [formattedDuration, setFormattedDuration] = useState({ minutes: 0, seconds: 0})
  let options = [
    'Reproduzir a proxima',
    'Adicionar à lista de reprodução',
    'Adicionar à fila',
    'Ir para o álbum',
    'Ir para o artista',
    'Compartilhar',
    'Detalhes'
  ]

  function formatDurationToMinutes(){
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration - (minutes * 60))

    setFormattedDuration({
      minutes,
      seconds
    })
  }

  React.useEffect(()=> {
    formatDurationToMinutes()
  },[])

  return (
    <TouchableHighlight
      style={{borderRadius: 5, marginVertical: 5}}
      onPress={() => console.log('tapped')}
      underlayColor="gainsboro"
    >
      <View style={styles.musicContainer}>
        <Image source={{uri: "https://picsum.photos/40/40"}} style={styles.albumImage} />
        <View>
          <Text style={styles.musicTitle}>{filename}</Text>
          <Text style={styles.musicArtist}>um artista ai</Text>
          <Text style={styles.musicDuration}>
            {`${formattedDuration.minutes}:${formattedDuration.seconds}`}
          </Text>
        </View>

        <View style={styles.btnOptions}>
          <ContextMenu handlePress={() => true} options={options} />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  musicContainer: {
    padding: 3,
    // backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginVertical: 5,
    position: 'relative'
  },
  albumImage: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 5
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  musicArtist: {
    color: 'grey'
  },
  musicDuration: {
    alignSelf: 'flex-end'
  },
  btnOptions: {
    position: 'absolute',
    right: 0,
    padding: 10,
    borderRadius: 50
  }
})

export default Music
