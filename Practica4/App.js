/*Zona de importacones*/
import { StatusBar } from 'expo-status-bar';
import { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = () =>{
  return (
    <Text>Hola mundo React Native</Text>
  )
}
/*Zona de ejecucion*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo desde reactnative!</Text>
       <Text>Hola mundo desde reactnative!</Text>
        <Text>Hola mundo desde reactnative!</Text>
      <Button title="Presionar"></Button>
      <StatusBar style="auto" />
    </View>
  );
} 
/*Zona de estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
