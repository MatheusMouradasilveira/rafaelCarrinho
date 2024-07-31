import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { ICartItem } from '../types/Product';
import { useCartContext } from '../contexts/CartContext';

const CartCard = ({ cartItem }: { cartItem: ICartItem }) => {
  const { removeProduct, addProduct } = useCartContext();

  // Animated values
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, fadeAnim]);

  return (
    <Animated.View style={[styles.card, { transform: [{ translateX: slideAnim }], opacity: fadeAnim }]}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{cartItem.product.title}</Text>
        <Text style={styles.price}>${cartItem.product.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => removeProduct(cartItem.product.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={() => addProduct(cartItem.product)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeProduct(cartItem.product.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    margin: 6,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 8,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  removeButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  removeButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
});
