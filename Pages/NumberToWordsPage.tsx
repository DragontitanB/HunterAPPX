import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

/**
 * Componente funcional NumberToWordsPage.
 * Permite al usuario ingresar un número y muestra su representación en palabras.
 */
function NumberToWordsPage() {
  const [number, setNumber] = useState<string>('');
  const [words, setWords] = useState<string>('');

  /**
   * Convierte un número en su representación en palabras.
   * @param num El número a convertir.
   * @returns La representación en palabras del número.
   */
  const numberToWords = (num: number): string => {
    const unidades: string[] = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas: string[] = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales: { [key: number]: string } = {
      10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince', 16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve'
    };

    if (num < 10) return unidades[num];
    if (num < 20) return especiales[num];
    if (num < 100) {
      const d = Math.floor(num / 10);
      const u = num % 10;
      return `${decenas[d]}${u > 0 ? ' y ' + unidades[u] : ''}`;
    }
    if (num < 1000) {
      const c = Math.floor(num / 100);
      const resto = num % 100;
      return `${unidades[c]}cientos${resto > 0 ? ' ' + numberToWords(resto) : ''}`;
    }
    if (num === 1000) return 'mil';
    return 'Número fuera de rango';
  };

  /**
   * Maneja la conversión del número ingresado a palabras.
   */
  const handleConvert = (): void => {
    const num = parseInt(number, 10);
    if (!isNaN(num) && num >= 0 && num <= 1000) {
      setWords(numberToWords(num));
    } else {
      setWords('Número fuera de rango');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traductor de Números a Letras</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
        placeholder="Ingrese un número (1-1000)"
      />
      <TouchableOpacity style={styles.button} onPress={handleConvert}>
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>
      {words && <Text style={styles.result}>Resultado: {words}</Text>}
    </View>
  );
}

/**
 * Estilos para el componente NumberToWordsPage.
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
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'purple',
  },
});

export default NumberToWordsPage;
