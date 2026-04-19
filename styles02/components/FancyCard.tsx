import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardEleveted]}>
        <Image
          source={{
            uri: "https://tse2.mm.bing.net/th/id/OIP.nmkt1u5WAVKzMPb_NPMJwAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLable}>Pink City, jiapur </Text>
          <Text style={styles.cardDescription}>
            Jaipur is the capital of Rajasthan, founded in 1727 by Sawai Jai
            Singh II. It is known as the Pink City because many of its buildings
            are painted pink. The city is famous for places like Hawa Mahal and
            Amber Fort. 
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: { fontSize: 28, fontWeight: "bold", paddingHorizontal: 8 },
  card: {
    width: 350, height:360, borderRadius:6 ,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardEleveted: {
    backgroundColor:'#ffffff',
    elevation: 3,
    shadowOffset:{
      width:1, height:1
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopStartRadius:6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal:12
  },
  cardTitle:{
   color: '#000000',
   fontSize: 16,
   fontWeight:'bold',
   marginBottom:4

  },
  cardLable:{
    color: '#000000',
    fontSize:14,
    marginBottom:6
  },
  cardDescription:{
    color: '#000000',
    fontSize: 12,
    marginBottom:12,
    marginTop:6,
    flexShrink:1,

  },
  cardFooter:{
    color: '#000000'
  }
});
