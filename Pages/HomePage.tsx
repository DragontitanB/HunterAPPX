import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

/**
 * Componente funcional HomePage.
 * Muestra información personal del usuario junto con una imagen.
 */
function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Datos Personales</Text>
      <Image
        source={require('../IMG/FotoFormal2.jpg')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre: Bryan Daniel</Text>
        <Text style={styles.text}>Apellido: Quiñones Garcia</Text>
        <Text style={styles.text}>Correo Electrónico: 20220150@itla.edu.do</Text>
      </View>
    </View>
  );
}

/**
 * Estilos para el componente HomePage.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Fondo gris claro
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple', // Color del título morado
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100, // Imagen redondeada
  },
  textContainer: {
    borderWidth: 1,
    borderColor: 'purple', // Borde morado
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'purple', // Color del texto morado
  },
});

export default HomePage;
