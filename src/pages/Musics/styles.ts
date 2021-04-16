import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
   
    marginTop: 5 + Constants.statusBarHeight,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 50,
    padding: 15,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 3
  },

  permissionRequest: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  permissionTitle: {
    fontSize: 22
  },
  permissionButton: {
    height: 30,
    alignItems: 'center',
    backgroundColor: '#6714ba'
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: 18
  }
})

export default styles
