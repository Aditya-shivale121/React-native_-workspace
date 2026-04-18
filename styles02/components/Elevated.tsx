import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardeleveted]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardeleveted]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardeleveted]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card,styles.cardeleveted]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardeleveted]}>
          <Text>More...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   headingText:{
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal:8
    
   },
   container:{
    padding:8,
   },
   card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    margin:5,
    height:100,
    width:100
   },
   cardeleveted:{
    backgroundColor:'#d0c8c8'
   }
})