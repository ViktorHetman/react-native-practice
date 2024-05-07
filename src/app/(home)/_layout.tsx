import { Stack } from 'expo-router'
import type { FC } from 'react'

import { ChatProvider } from '@/providers/chat-provider'

const HomeLayout: FC = () => {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  )
}

export default HomeLayout
