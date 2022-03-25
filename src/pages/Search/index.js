import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Keyboard} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';
import Home from '../Home';
import api, {key} from '../../services/api'

export default function Search(){

    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [cidade, setCidade] = useState(null);
    const [error, setError] = useState(null);

    async function inputSearch(){
     // https://api.hgbrasil.com/weather?key=6911ee7c&city_name=Campinas,SP
    const response = await api.get(`?key=${key}&city_name=${input}`)
    if(response.data.by === 'default'){
      setError('Cidade não encontrada!')
      setCidade(null)
      setInput('')
      Keyboard.dismiss
    } 
    }

    return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButom} onPress={() => navigation.navigate('Home')}>
        <Feather
          name='chevron-left'
          size={32}
          color='#000'
        />
        <Text style={{fontSize: 22}}> Voltar </Text>
      </TouchableOpacity>
      
    <View style={styles.searchBox}>
        <TextInput
        value={input}
        onChangeText={ (valor) => setInput(valor)}
        placeholder="Ex. São Paulo, SP"
        style={styles.input}
        
        />
        <TouchableOpacity style={styles.icon} >
          <Feather
          name="search"
          size={22}
          color="#FFF"
          onPress={inputSearch}
          />
        </TouchableOpacity>
    </View>

    { error && <Text style={{fontSize: 22}}> {error}</Text>}

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8f0ff',
      alignItems: 'center',
    },
    backButom: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginTop: '5%',
      marginLeft: 15,
      marginBottom: 40
    },
    searchBox:{
      width: '90%',
      height: 50,
      borderRadius: 8,
      
      flexDirection: 'row',

      backgroundColor: '#DDD',
      marginBottom: 30,

    },
    input:{
      backgroundColor: '#fff',
      width: '85%',
      height: 50,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      paddingHorizontal: 15
    },
    icon: {
      width: '15%',
      height: 50,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1ec9ff'
    }
  });