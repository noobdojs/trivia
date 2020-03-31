import React, {useState} from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import questoes from '../assets/lista.json'

export default function Questoes({ route, navigation }){
  const [resposta,setResposta] = useState('')
  
  const { id, acertos } = route.params
  const questao = questoes[id-1]
  
  function handlePress(){
    if(id < 3){
      
      navigation.push('Questao', { id: id+1, acertos })
    }else{
      navigation.navigate('Final', acertos)
    }
  }
  function handleResposta(correta){
    if(correta){
      setResposta('correta')
      navigation.setParams({
        acertos: acertos+1
      })
    }else{
      setResposta('errada')
      navigation.setParams({
        acertos
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container, {flex: 0}}>
        <Text style={{ marginBottom: 15 }}>{questao.titulo}</Text>
        {questao.alternativas.map(alt => (
            <TouchableOpacity key={alt.id} style={styles.btn} onPress={() => handleResposta(alt.correta)}>
              <Text style={styles.btnText, {fontSize: 16, color: '#fff'}}>{alt.titulo}</Text>
            </TouchableOpacity>
        ))
        }
      </View>
      <Text style={styles.resposta}>{resposta}</Text>
      {resposta != '' &&
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>Próxima</Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
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
  },
  resposta: {
    fontSize: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})