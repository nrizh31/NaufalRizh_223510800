import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, Text } from '@rneui/themed';

export default function SearchScreen() {
  const [search, setSearch] = React.useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search recipes..."
        onChangeText={setSearch}
        value={search}
        platform="ios"
        containerStyle={styles.searchBar}
      />
      <Text style={styles.text}>Try searching for your favorite recipe!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});