import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function contactList() {
  const contacts = [
    {
      uid: "1",
      name: "Aarav Sharma",
      status: "Online",
      imgUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      uid: "2",
      name: "Priya Verma",
      status: "Offline",
      imgUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      uid: "3",
      name: "Rohan Patel",
      status: "Busy",
      imgUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      uid: "4",
      name: "Sneha Iyer",
      status: "Online",
      imgUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      uid: "5",
      name: "Karan Mehta",
      status: "Away",
      imgUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>contactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imgUrl }) => {
          return (
            <View key={uid} style={styles.userCard}>
              <Image
                source={{
                  uri: imgUrl,
                }}
                style={styles.userImage}
              />
              <View>
                 <Text style={styles.username}>{name}</Text>
                 <Text style={styles.userStatus}>{status}</Text>
              </View>
              </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: { fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,},
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,


  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor:'#8d3daf',
    padding: 4,
    borderRadius:10,


  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  username: {
    fontSize: 16,
    fontWeight:'600',
    color:'#f2eeee'
  },
  userStatus: {},
});
