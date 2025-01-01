import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from '@rneui/themed';

const popularRecipes = [
  {
    id: 1,
    name: 'Nasi Goreng',
    image: 'https://i.pinimg.com/736x/1e/06/ca/1e06ca576fb694158ed276d184a0b5c6.jpg',
    time: '30 mins',
  },
  {
    id: 2,
    name: 'Rendang',
    image: 'https://i.pinimg.com/736x/15/aa/70/15aa70c00d6167f1afbf1c722a6d5bf5.jpg',
    time: '30 mins',
  },
  {
    id: 3,
    name: 'Batagor',
    image: 'https://i.pinimg.com/736x/db/a5/6e/dba56eab5f7f0233ac482b5a670378f5.jpg',
    time: '30 mins',
  },
  {
    id: 4,
    name: 'Soto Betawi',
    image: 'https://i.pinimg.com/736x/17/14/1c/17141c181e50112373a5da52dd514a70.jpg',
    time: '30 mins',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        {popularRecipes.map((recipe) => (
          <Card key={recipe.id} containerStyle={styles.card}>
            <Card.Image
              source={{ uri: recipe.image }}
              style={styles.cardImage}
            />
            <Card.Title>{recipe.name}</Card.Title>
            <Text style={styles.timeText}>{recipe.time}</Text>
            <Button
              title="View Recipe"
              onPress={() => navigation.navigate('RecipeDetail', { recipe })}
              buttonStyle={styles.button}
            />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2937', // Dark blue-gray, resembling GPT's theme
    },    
  heading: {
    padding: 15,
  },
  cardContainer: {
    padding: 5,
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
  },
  cardImage: {
    aspectRatio: 16/9,
    borderRadius: 10,
  },
  timeText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  button: {
    backgroundColor: '#FF0000', // Red color
    borderRadius: 5,
  },
});