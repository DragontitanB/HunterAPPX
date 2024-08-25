import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function ExperiencePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiencia Personal</Text>
      <WebView
        style={styles.webview}
        source={{ uri: 'https://youtu.be/iVzYVGbP83A' }}
        allowsFullscreenVideo
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  webview: {
    width: 560,
    height: 315,
  },
});

export default ExperiencePage;
