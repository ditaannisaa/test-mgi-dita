import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const ImageScreen = () => {
  const {data: image} = useQuery({
    queryKey: ['image'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      const imageData = await response.json();
      return imageData;
    },
  });

  console.log(image);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    productColumn: {
      width: '48%', // Lebar setengah dari parent untuk membuat dua kolom
      height: Dimensions.get('window').height / 2,
      marginBottom: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
    },
    productText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {image?.map(product => (
        <View key={product.id} style={styles.productColumn}>
          <TouchableOpacity>
            <Image
              source={{uri: product.url}}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
