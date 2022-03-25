import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View, Text, TextInput, Keyboard, TouchableOpacity, ToastAndroid} from 'react-native'
import * as Location from 'expo-location'
import {Feather} from '@expo/vector-icons'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast';
import { useState } from 'react';
import api, {key} from '../../services/api'

export default function Home(){

    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const [background, setBackground] = useState(['#97c1ff', '#1ed6ff'])
    const [icon, setIcon] = useState({name: 'cloud', color: '#1ec9ff'})
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    useEffect(()=> {
      (async ()=> {
        let {status} = await Location.requestPermissionsAsync();

        if(status !== 'granted'){
          setErrorMsg('Permissão negada para acessar localização')
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});

        const response = await api.get(`?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
        setWeather(response.data);

        if(response.data.results.currently === 'noite') {
          setBackground(['#0c3741', '#0f2f61'])
        }

// storm - tempestade
// snow - neve
// hail - granizo
// rain - chuva
// fog - neblina
// clear_day - dia limpo
// clear_night - noite limpa
// cloud - nublado
// cloudly_day - nublado de dia
// cloudly_night - nublado de noite
// none_day - erro ao obter mas está de dia
// none_night - erro ao obter mas está de noite

        switch(response.data.results.condition_slug){
          case 'storm':
                setIcon({name: 'weather-pouring',color: '#fff'})
                break;
            case 'snow':
                setIcon({name: 'snowflake',color: '#fff'})
                break;
            case 'hail':
                setIcon({name: 'weather-hail',color: '#fff'})
                break;
            case 'rain':
                setIcon({name: 'weather-pouring',color: '#fff'})
                break;
            case 'fog':
                setIcon({name: 'weather-fog',color: '#fff'})
                break;
            case 'clear_day': 
                setIcon({name: 'weather-sunny',color: 'orange'})
                break;
            case 'cloudly_night ':
                setIcon({name: 'weather-night-partly-cloudy',color: '#fff'})
                break;
                case 'cloud':
                setIcon({name: 'weather-partly-cloudy',color: 'orange'})
                break;
            case 'none_day':
                setIcon({name: 'weather-partly-cloudy',color: '#fff'})
                break;
            case 'none_night':
                setIcon({name: 'weather-partly-cloudy',color: '#fff'})
                break;
        }
        console.log(weather)        
        setLoading(false);

      })();
    }, []);

    if(loading){
      return(
      <View style={styles.container}>
        <Text> Carregando ...</Text>
      </View>
      )
    }

    function toast(msg){
      ToastAndroid.showWithGravity(
        msg,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }

    async function inputSearch(){
      // https://api.hgbrasil.com/weather?key=6911ee7c&city_name=Campinas,SP
     const response = await api.get(`?key=${key}&city_name=${input}`)
     if(response.data.by === 'default'){
       setError('Cidade não encontrada!')
       setInput('')
       toast("Cidade não encontrada!")
       Keyboard.dismiss()
       
     } else {
        setWeather(response.data)
        setInput('')
        Keyboard.dismiss()
        console.log(response.data)
     }
     }

    
    return(
    <SafeAreaView style={styles.container}>
      
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

        <Header weather={weather} background={background} icon={icon}/>
        <Menu style={styles.menu}/>
        <Conditions weather={weather}/>
        <FlatList
        horizontal={true}
        contentContainerStyle={{ height: 200}}
        style={styles.list}
        data={weather.results.forecast}
        keyExtractor={item => item.date}
        renderItem={({item}) => <Forecast data={item}/> }
        />

   
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#e8f0ff',
      paddingTop: '5%',
    },
    list:{

    },
    searchBox:{
      width: '95%',
      height: 50,
      borderRadius: 8,
      flexDirection: 'row',
      backgroundColor: '#DDD',
      marginBottom: 30,
    },
    icon: {
      width: '15%',
      height: 50,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1ec9ff'
    },
    input:{
      backgroundColor: '#fff',
      width: '85%',
      height: 50,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      paddingHorizontal: 15
    },
    
  });