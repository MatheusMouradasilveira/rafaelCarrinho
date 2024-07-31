
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native';
import { ProductDTO } from '../types/Product';


const ProductDetails: React.FC = () => {
  const route = useRoute<any>();
  const product  = route.params as ProductDTO;

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    position: 'relative', 
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cartIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProductDetails