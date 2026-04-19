import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javasctipt 21 - ES12
          </Text>

          <Image
            source={{
              uri: "https://tse1.mm.bing.net/th/id/OIP.RWSdmTQf7gbQTgOdcpugnwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
            }}
            style={styles.cardImage}
          />

          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              React Native is a framework developed by Meta to build mobile apps
              using JavaScript and React. It allows you to create Android and iOS
              apps with a single codebase instead of writing separate native code.
              React Native uses native components, so apps perform closer to real
              native apps compared to web-based solutions
            </Text>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite("https://draft.dev/learn/javascript-blogs")
              }
            >
              <Text>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#f97f51",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  headingContainer: {
  },
  headerText:{
    textAlign:'center',
    margin:10,
    color:'#000000',
    fontSize:16,
    fontWeight:'bold',

  },
  cardImage: {
    height: 200,
    width: "100%",
  },
  bodyContainer: {
    padding:10
  },
  footerContainer: {
    padding:10,
    flexDirection:'row',
    alignSelf:'center',
    borderRadius:6,
    justifyContent:'center',
    backgroundColor:'#ffffff'
  },
});