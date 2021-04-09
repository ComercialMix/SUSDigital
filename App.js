import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <TextInput style={styles.input}/>
          <Button style={styles.button} color={'#0169B2'} title={'Entrar'} />
          <Button color={'#0169B2'} title={'Cadastre-se'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#0169B2',
    width: '100%',
    justifyContent: 'flex-start',
  },
  sectionHeader: {
    flexDirection: 'row',
  },
  input:{
    backgroundColor: '#fff',
    width: 200,
    margin: 10,
    borderRadius: 5,
  }
});
