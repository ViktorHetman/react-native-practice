import { Slot } from 'expo-router'
import { useEffect, type FC } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat, OverlayProvider } from 'stream-chat-expo'

const client = StreamChat.getInstance('tvntpnshpntu')

const HomeLayout: FC = () => {
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

      // const channel = client.channel('messaging', 'the_park', {
      //   name: 'The Park'
      // })
      // await channel.watch()
    }

    connect()
  })

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Slot />
      </Chat>
    </OverlayProvider>
  )
}

export default HomeLayout
