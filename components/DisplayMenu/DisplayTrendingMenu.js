import React from "react";
import TrendingMenu from "../DataMenu/Menu.json"
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native'

export default function DisplayTrendingMenu(){
    return(
        <>
        {TrendingMenu.TrendingMenu.map((item, i) => (
                               
                <SafeAreaView key={i}>                  
                <TouchableOpacity style={styles.touch}>
                 <Image source={{uri:item.imagen}} alt="" style={styles.img}/> 
                 <Text style={styles.title}>{item.name}</Text>  
                 </TouchableOpacity> 
                </SafeAreaView>  

        ))}
        </>
    )
}

const styles = StyleSheet.create( {
    img: {
    width: 150,
    height: 150,
    marginBottom: 10
 },
    title: {
    color: '#ffffff'
 },
touch:{
    marginRight: 10
}
})