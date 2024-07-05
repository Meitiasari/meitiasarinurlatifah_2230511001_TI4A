import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import FoodList from './FoodList';

const menu = [
  'Apple Pie', 'Avocado Salad', 'Almond Butter', 'Burger', 'Bacon', 'Banana Bread',
  'Caesar Salad', 'Carbonara', 'Chicken Curry', 'Dumplings', 'Donuts', 'Fried Chicken',
  'French Toast', 'Hamburger', 'Hot Dogs', 'Ice Cream', 'Kebabs', 'Kimchi', 'Lasagna',
  'Mac and Cheese', 'Nachos', 'Noodle Soup', 'Omelette', 'Pizza', 'Ramen', 'Spaghetti',
  'Tuna Salad', 'Waffles', 'Yogurt'
];

export default function SearchFoodMenu() {
  const [search, setSearch] = useState('');

  const filteredMenu = useMemo(() => {
    return menu.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SEARCH FOOD MENU</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.listContainer}>
        <FoodList data={filteredMenu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', 
  },
  input: {
    height: 40,
    borderColor: '#2a8cd8',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0faff',
    color: '#000000',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
