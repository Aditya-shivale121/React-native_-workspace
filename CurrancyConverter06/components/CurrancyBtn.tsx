import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CurrencyBtnProps {
  name: string;
  flag: string;
}

export default function CurrancyBtn({ name, flag }: CurrencyBtnProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.country}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flag: {
    fontSize: 28,
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  }
});