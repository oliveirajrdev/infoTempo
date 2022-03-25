import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'



export default function Forecast({data}){

    function condition(condition){
        switch(condition){
            case 'storm':
                return icon = {
                    name: 'weather-pouring',
                    color: '#1ec9ff'
                };
                break;
            case 'snow':
                return icon = {
                    name: 'snowflake',
                    color: '#1ec9ff'
                };
                break;
            case 'hail':
                return icon = {
                    name: 'weather-hail',
                    color: '#1ec9ff'
                };
                break;
            case 'rain':
                return icon = {
                    name: 'weather-pouring',
                    color: '#1ec9ff'
                };
                break;
            case 'fog':
                return icon = {
                    name: 'weather-fog',
                    color: '#1ec9ff'
                };
                break;
            case 'clear_day': 
                return icon = {
                    name: 'weather-sunny',
                    color: 'orange'
                };
                break;
            case 'cloudly_day':
                return icon = {
                    name: 'weather-partly-cloudy',
                    color: 'orange'
                };
                break;
            case 'cloudly_night ':
                return icon = {
                    name: 'weather-night-partly-cloudy',
                    color: 'orange'
                };
                break;
            case 'none_day':
                return icon = {
                    name: 'weather-partly-cloudy',
                    color: 'orange'
                };
                break;
            case 'none_night':
                return icon = {
                    name: 'weather-night-partly-cloudy',
                    color: 'orange'
                };
                break;
            default :
                return icon = {
                    name: 'weather-partly-cloudy',
                    color: 'black'
                }
        }
    }       


    let icon = condition(data.condition)

    return(
        <View style={styles.container}>
        <View style={styles.dia}>
            <Text>{data.weekday}</Text>
            <Text>{data.date}</Text>
        </View>
            <MaterialCommunityIcons
            name={icon.name}
            size={30}
            color={icon.color}
            />
        <View style={{alignItems: 'center'}}>
            <Text> {data.min}º </Text>
            <Text style={styles.graus}> {data.max}º </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginLeft: 15,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dia:{
        alignItems: 'center',     
        },
    graus: {
        fontSize: 16,
        fontWeight: 'bold'
    }    
})