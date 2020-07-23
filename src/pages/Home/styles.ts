import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5 + Constants.statusBarHeight,
    alignItems: 'center',
    marginHorizontal: 5
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    borderRadius: 20
  },
  cardTitle: {
    color: '#fff'
  },
  cardAvatar: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  bgCard: {
    width: '100%',
    height: 120,
    alignSelf: 'center',
    borderRadius: 20
  },

  quickOptions:{
    width: '100%',
    height: 90,
    marginVertical: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
