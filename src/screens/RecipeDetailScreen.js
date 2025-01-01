import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Image, Divider } from '@rneui/themed';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: recipe.image }}
        style={styles.image}
      />
      <Text h3 style={styles.title}>{recipe.name}</Text>
      <Text style={styles.time}>Cooking Time: {recipe.time}</Text>
      <Divider style={styles.divider} />
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        This is a delicious {recipe.name} recipe that you'll love to make at home.
        Perfect for any occasion!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 15,
  },
  time: {
    paddingHorizontal: 15,
    color: '#666',
  },
  divider: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  description: {
    paddingHorizontal: 15,
    lineHeight: 24,
    color: '#444',
  },
});