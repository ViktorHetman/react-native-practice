import { useEffect, useState, type FC, type PropsWithChildren } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { StreamChat } from 'stream-chat'
import { Chat, OverlayProvider } from 'stream-chat-expo'

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY!)

export const ChatProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: 'jDoe',
          name: 'John Doe',
          image: 'https://i.imgur.com/fR9Jz14.png'
        },
        client.devToken('jDoe')
      )
      setIsReady(true)

      // const channel = client.channel('messaging', 'the_park', {
      //   name: 'The Park'
      // })
      // await channel.watch()
    }
    connect()

    return () => {
      client.disconnectUser()
      setIsReady(false)
    }
  }, [])
  if (!isReady) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  )
}
