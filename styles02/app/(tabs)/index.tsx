import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flatcards from '@/components/ui/Flatcards'

const index = () => {
  return (
    <SafeAreaView>
      <Text>index</Text>
      <Flatcards/>
    </SafeAreaView>
  )
}

export default index