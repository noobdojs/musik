import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5 + Constants.statusBarHeight,
    alignItems: 'center',
    marginHorizontal: 10,
    // height: Dimensions.get('screen').height
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  }
})

export default styles