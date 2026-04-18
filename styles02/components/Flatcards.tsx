import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { red } from 'react-native-reanimated/lib/typescript/Colors'

export default function Flatcards() {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardtwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   headingText:{
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal:8
    
   },
   container: {
    
    flex:1,
    flexDirection:'row',
    padding:8,
   },
   card: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    borderRadius:5,
    width:100,
    height:100,
   },
   cardone: {
    backgroundColor:'#ff0000'
   },
   cardtwo: {
    backgroundColor:'#06c552'
   },
   cardthree: {
    backgroundColor:'#6eb9f2'
   },
})