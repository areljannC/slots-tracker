import { PermissionsAndroid } from 'react-native'

export const requestLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Slots Tracker Location Permission',
        message: 'Slots Tracker needs access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can access the location.')
    } else {
      console.log('You can not access the location.')
    }
  } catch (error) {
    console.warn(error)
  }
}
