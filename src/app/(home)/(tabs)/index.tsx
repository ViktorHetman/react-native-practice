import type { FC } from 'react'
import { ChannelList } from 'stream-chat-expo'
import { router } from 'expo-router'

const MainTabScren: FC = () => {
  return (
    <ChannelList onSelect={channel => router.push(`/channel/${channel.cid}`)} />
  )
}

export default MainTabScren
