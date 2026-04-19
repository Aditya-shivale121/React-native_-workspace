import ActionCard from "@/components/ActionCard";
import Elevated from "@/components/Elevated";
import Flatcards from "@/components/Flatcards";
import FancyCard from "@/components/FancyCard";
import ContactList from "@/components/contactList";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Flatcards />
        <Elevated />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
