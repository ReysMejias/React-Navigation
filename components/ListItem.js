import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default ({title, onPress}) => {
    console.log()

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
           <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        height: 60,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    text:{
        fontSize:18,
    }
})