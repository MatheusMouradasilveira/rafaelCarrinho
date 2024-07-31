import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
const {cart, getCart} = useCartContext()
const navigation = useNavigation<any>();
  const calculateTotal = () => {
    return cart && cart.length > 0 ? cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2) : 0
  };

  useEffect(() => {
    getCart()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.product.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.product.title}</Text>
            <Text style={styles.itemText}>Preço: R$ {item.product.price.toFixed(2)}</Text>
            <Text style={styles.itemText}>Quantidade: {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
      <Button title="Fazer Pedido" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});