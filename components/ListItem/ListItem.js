import * as React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity  } from 'react-native'

/* export default ListItem = ({ }) => {
    return(
        <TouchableOpacity style={styles.touch}>
            <Image source={{uri:item.imagen}} alt="" style={styles.img}/> 
            <Text style={styles.title}>{item.name}</Text>  
        </TouchableOpacity> 
    )
} */

export default ListItem = ({ item }) => {
    const { id, name, imagen } = item
    return(
            <TouchableOpacity style={styles.touch}>
            <Image source={{uri: item.imagen}} alt="" style={styles.img}/> 
            <Text style={styles.title}>{item.name}</Text>  
        </TouchableOpacity>
         
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