import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 5 + Constants.statusBarHeight,
    
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'center'
  },
})

export default styles