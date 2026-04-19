import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flatcards from '@/components/Flatcards'
import Elevated from '@/components/Elevated'
import FancyCard from '@/components/FancyCard'
import { ScrollView } from 'react-native'
import ActionCard from '@/components/ActionCard'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards/>
        <Elevated/>
        <FancyCard/>
        <ActionCard/>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default index