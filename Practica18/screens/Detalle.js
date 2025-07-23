import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Detalles del Usuario</Text>
      <Button title="Volver al Perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20
  }
});
