import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from '@rneui/themed';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Icon
        name="heart"
        type="ionicon"
        size={50}
        color="#FF6B6B"
      />
      <Text style={styles.text}>Your favorite recipes will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: '#666',
  },
});