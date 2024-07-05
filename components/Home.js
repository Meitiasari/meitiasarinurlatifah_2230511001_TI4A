import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Food Menu App</Text>
      <Button
        title="Go to Search Food Menu"
        onPress={() => navigation.navigate('Search')}
        color="#ff6347" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', 
    textAlign: 'center',
  },
});

export default Home;
