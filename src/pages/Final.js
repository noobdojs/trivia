import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Final({ navigation, route }){
  const [totalAcertos,setTotalAcertos] = useState(0)
  
  useEffect(() => {
    setTotalAcertos(route.params)
  },[])

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Acertou: {totalAcertos}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => {
        navigation.navigate("Home")
      }}>
        <Text style={styles.btnText}>Finalizar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10
  },
  btn: {
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 3,
    backgroundColor: '#8e4dff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
})