import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen(){
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#8e4dff" />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Questao', { id: 1 , acertos: 0 })}>
        <Text style={styles.btnText}>Iniciar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 90,
    height: 30,
    borderRadius: 3,
    backgroundColor: '#8e4dff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
})