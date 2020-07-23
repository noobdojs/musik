import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5 + Constants.statusBarHeight,
    alignItems: 'center',
    marginHorizontal: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
})

export default styles