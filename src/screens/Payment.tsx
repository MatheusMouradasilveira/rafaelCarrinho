// src/screens/Payment.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation, NavigationProp, StackActions } from '@react-navigation/native';
import { useCartContext } from '../contexts/CartContext';
import { RootStackParamList } from '../types/types';

const Payment = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { clearCart } = useCartContext();

  const handlePayment = () => {
    // Lógica para processar o pagamento

    // Limpar o carrinho após o pagamento bem-sucedido
    clearCart();

    // Navegar para a tela de status do pedido
    navigation.navigate('OrderStatus');

    // Após 2 segundos, voltar à tela do carrinho (ajuste conforme necessário)
    setTimeout(() => {
      navigation.dispatch(StackActions.popToTop()); // Remove todas as telas acima da inicial na pilha de navegação
      navigation.navigate('Cart'); // Navega para a tela do carrinho
    }, 2000); // Ajuste o tempo conforme necessário
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <TextInput style={styles.input} placeholder="Endereço" />
      <TextInput style={styles.input} placeholder="Cidade" />
      <TextInput style={styles.input} placeholder="Estado" />
      <TextInput style={styles.input} placeholder="Número do Cartão" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Validade" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" />
      <Button title="Pagar" onPress={handlePayment} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
