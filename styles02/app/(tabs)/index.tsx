import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flatcards from '@/components/Flatcards'
import Elevated from '@/components/Elevated'
import { ScrollView } from 'react-native'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards/>
        <Elevated/>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default index