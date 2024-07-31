import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";

interface ProductProps {
  item: ProductDTO
}

const ProductCard = ({item}: ProductProps) => {
  const {addProduct} = useCartContext();
  const CART_ICON_URL = "https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"; // URL de um ícone de carrinho
  const navigation = useNavigation<any>();
  return (
    <View style={styles.productItem}>
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
    </View>
    <View style={{marginTop: 20}}>
    <TouchableOpacity onPress={() => addProduct(item)}>
    <Image source={{ uri: CART_ICON_URL }} style={styles.cartIcon} />
    </TouchableOpacity>
    </View>
  </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
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
