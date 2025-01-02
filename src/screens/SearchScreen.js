// SearchScreen.js
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, Icon } from '@rneui/themed';

export default function SearchScreen() {
  const [search, setSearch] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Icon
            name="search"
            type="material"
            size={20}
            color="#666"
            containerStyle={styles.searchIcon}
          />
          <TextInput
            placeholder="Search recipes..."
            onChangeText={setSearch}
            value={search}
            style={styles.input}
          />
        </View>
      </View>
      <Text style={styles.text}>Try searching for your favorite recipe!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 0,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});