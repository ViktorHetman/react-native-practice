import type { FC } from 'react'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootLayout: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
}

export default RootLayout
