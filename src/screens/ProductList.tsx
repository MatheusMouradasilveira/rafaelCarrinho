import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ListRenderItem, Image, TouchableOpacity, Button } from "react-native";
import ProductCard from "../components/ProductCard";
import { ProductDTO } from "../types/Product";

const URL = "https://fakestoreapi.com/products/category/electronics";


const ProductList: React.FC = () => {
 
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL);
        const data: ProductDTO[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCard item={item}  />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;

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
    position: 'relative', // Permite posicionar o ícone de carrinho absolutamente
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
});
