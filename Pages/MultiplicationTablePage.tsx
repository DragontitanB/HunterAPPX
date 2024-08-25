import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

/**
 * Componente funcional MultiplicationTablePage.
 * Permite al usuario ingresar un número y muestra su tabla de multiplicar.
 */
function MultiplicationTablePage() {
  const [number, setNumber] = useState<string>('');
  const [table, setTable] = useState<string[]>([]);

  /**
   * Genera la tabla de multiplicar para el número dado.
   * @param num El número para el cual generar la tabla de multiplicar.
   */
  const generateTable = (num: number): void => {
    const result: string[] = [];
    for (let i = 1; i <= 13; i++) {
      result.push(`${num} x ${i} = ${num * i}`);
    }
    setTable(result);
  };

  /**
   * Maneja la generación de la tabla de multiplicar cuando se presiona el botón.
   */
  const handleGenerate = (): void => {
    const num = parseInt(number, 10);
    if (!isNaN(num)) {
      generateTable(num);
    } else {
      Alert.alert('Error', 'Por favor ingrese un número válido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
        placeholder="Ingrese un número"
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Generar Tabla</Text>
      </TouchableOpacity>
      <View style={styles.tableContainer}>
        {table.map((line, index) => (
          <Text key={index} style={styles.result}>{line}</Text>
        ))}
      </View>
    </View>
  );
}

/**
 * Estilos para el componente MultiplicationTablePage.
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
  tableContainer: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default MultiplicationTablePage;
