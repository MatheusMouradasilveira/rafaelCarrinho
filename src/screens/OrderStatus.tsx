import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderStatus = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pedido realizado com sucesso!</Text>
      <Button title="Voltar para Produtos" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
