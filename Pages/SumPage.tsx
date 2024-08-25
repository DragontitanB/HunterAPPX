import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

/**
 * Componente funcional SumPage.
 * Permite al usuario ingresar dos números y muestra la suma de estos.
 */
function SumPage() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  /**
   * Maneja la suma de los dos números ingresados.
   * Muestra una alerta si los valores no son números válidos.
   */
  const handleSum = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      Alert.alert('Error', 'Por favor ingrese números válidos');
      return;
    }

    setResult(number1 + number2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumadora</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Número 1"
      />
      <Text style={styles.plusSign}>+</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Número 2"
      />
      <TouchableOpacity style={styles.button} onPress={handleSum}>
        <Text style={styles.buttonText}>Sumar</Text>
      </TouchableOpacity>
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
  );
}

/**
 * Estilos para el componente SumPage.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  plusSign: {
    fontSize: 24,
    marginBottom: 20,
    color: 'purple',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'purple',
  },
});

export default SumPage;
