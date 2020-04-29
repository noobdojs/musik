import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5 + Constants.statusBarHeight,
    alignItems: 'center',
    marginHorizontal: 10
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  }
})

export default styles