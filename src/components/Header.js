import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Header({background, weather,icon}){

    
    return(
        <LinearGradient style={styles.container} colors={background}>
            <Text style={styles.data}> {weather.results.date} </Text>
            <Text style={styles.cidade}> {weather.results.city_name}</Text>
            <MaterialCommunityIcons
            name={icon.name}
            size={150}
            color={icon.color}
            />
            <Text style={styles.graus}>{weather.results.temp}º</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 300,
        backgroundColor: 'blue',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        paddingVertical: 15,
    },
    data:{
        color: '#fff',
        fontSize: 17
    },
    cidade: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    graus:{
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold'
    }
})
    
