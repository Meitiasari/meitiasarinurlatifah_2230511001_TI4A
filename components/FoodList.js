import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FoodList = ({ data }) => {
  const renderItem = ({ item }) => {
    const firstLetter = item.charAt(0).toUpperCase();
    const itemStyle = styles[firstLetter] || styles.default;

    return (
      <View style={[styles.item, itemStyle]}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  default: {
    backgroundColor: '#2a8cd8',
  },
  A: {
    backgroundColor: '#ff6347',
  },
  B: {
    backgroundColor: '#32cd32',
  },
  C: {
    backgroundColor: '#1e90ff',
  },
  D: {
    backgroundColor: '#ff69b4',
  },
  E: {
    backgroundColor: '#ffc0cb',
  },
  F: {
    backgroundColor: '#dda0dd',
  },
  G: {
    backgroundColor: '#ff8c00',
  },
  H: {
    backgroundColor: '#00ced1',
  },
  I: {
    backgroundColor: '#f08080',
  },
  J: {
    backgroundColor: '#d3d3d3',
  },
  K: {
    backgroundColor: '#ffefd5',
  },
  L: {
    backgroundColor: '#90ee90',
  },
  M: {
    backgroundColor: '#f0e68c',
  },
  N: {
    backgroundColor: '#4682b4',
  },
  O: {
    backgroundColor: '#ff7f50',
  },
  P: {
    backgroundColor: '#87ceeb',
  },
  Q: {
    backgroundColor: '#ffa07a',
  },
  R: {
    backgroundColor: '#20b2aa',
  },
  S: {
    backgroundColor: '#40e0d0',
  },
  T: {
    backgroundColor: '#ff69b4',
  },
  U: {
    backgroundColor: '#9370db',
  },
  V: {
    backgroundColor: '#3cb371',
  },
  W: {
    backgroundColor: '#fa8072',
  },
  X: {
    backgroundColor: '#afeeee',
  },
  Y: {
    backgroundColor: '#ff4500',
  },
  Z: {
    backgroundColor: '#9370db',
  },
});

export default FoodList;
