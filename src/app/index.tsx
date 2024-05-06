import { Redirect } from 'expo-router'
import type { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const Home: FC = () => {
  return (
    <Redirect href={'/(home)/(tabs)'} />
    // <View className='flex-1 justify-center items-center bg-white'>
    //   <Text>Hello world</Text>
    //   <StatusBar style='auto' />
    // </View>
  )
}

export default Home
