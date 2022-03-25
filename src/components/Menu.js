import React from  'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Menu(){
    const Navigation = useNavigation();

    return(
            <View style={styles.menu}>
            <TouchableOpacity onPress={()=> Navigation.openDrawer()}>
                <Feather
                name="menu"
                size={36}
                color="#373737"
                />
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        zIndex: 9,
        left: 15,
        top: 115,
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 40 ,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
  
        }
})
