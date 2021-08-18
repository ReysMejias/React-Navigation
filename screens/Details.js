import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default ({navigation}) => {
    const body = navigation.getParam('body')
    const title = navigation.getParam('title')
    const name = navigation.getParam('name')

    return (
      <View style={styles.container}>
        <Text style={styles.nameTitulo}>{name}</Text>  
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.content}>{body}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#000',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameTitulo:{
        fontSize:18,
        fontWeight:'900',
    },
    titulo:{
        fontSize:34,
        textAlign:'center',
        paddingHorizontal:20,
    },
    content:{
        
        paddingHorizontal:50,
        
    }
});
  