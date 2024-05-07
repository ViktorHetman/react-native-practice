import { Stack } from 'expo-router'
import type { FC } from 'react'

const ChannelStack: FC = () => {
  return (
    <Stack>
      <Stack.Screen name='[cid]' options={{ headerShown: false }} />
    </Stack>
  )
}

export default ChannelStack
