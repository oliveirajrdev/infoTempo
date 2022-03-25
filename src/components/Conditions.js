import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'

export default function Conditions({weather}){
    return(
        <View style={styles.container}>
            <View style={styles.condition}>
                <Feather 
                name='wind'
                color='#1ec9ff'
                size={30}
                />
                <Text>{weather.results.wind_speedy}</Text>
            </View>
            <View style={styles.condition}>
                <Feather
                name='sunrise'
                color='#1ec9ff'
                size={30}
                />
                <Text>{weather.results.sunrise}</Text>
            </View>
            <View style={styles.condition}>
                <Feather
                name='sunset'
                color='#1ec9ff'
                size={30}
                />
                <Text>{weather.results.sunset}</Text>
            </View>
            <View style={styles.condition}>
                <Feather
                name='droplet'
                color='#1ec9ff'
                size={30}
                />
                <Text>{weather.results.humidity}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        backgroundColor: 'white',
        height: 80,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    condition:{
        alignItems: 'center',
        justifyContent: 'center',

        

    }
})