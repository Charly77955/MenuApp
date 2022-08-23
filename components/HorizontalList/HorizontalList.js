import * as React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity, FlatList  } from 'react-native'
import TrendingMenu from "../DataMenu/Menu.json"
import ListItem from '../ListItem/ListItem'

export default HorizontalList = () => {

    const TrendingMenu = [
        {
            id: "1",
            name: "Hamburguesa con papas",
            imagen: "https://previews.123rf.com/images/maxsheb/maxsheb1909/maxsheb190900134/129462448-hamburguesa-con-papas-fritas-en-el-pergamino.jpg"
            
        },
        {
            id: "2",
            name: "Pizza jamon y morron",
            imagen: "https://i0.wp.com/recetasargentinas.net/wp-content/uploads/2013/10/pizza-jamon-y-morrones-e1381836891874.jpg?fit=400%2C301&ssl=1"
        },
        {
            "id": "3",
            "name": "Papas con cheddar",
            "imagen": "https://media-cdn.tripadvisor.com/media/photo-p/17/60/6c/01/papas-fritas-con-queso.jpg"
        },
        {
            "id": "4",
            "name": "Sandwich vegano",
            "imagen": "https://www.clarin.com/img/2019/09/12/PzdIJYeve_1200x630__1.jpg"

        },
        {
            "id": "5",
            "name": "Quesadillas",
            "imagen": "https://www.paulinacocina.net/wp-content/uploads/2020/08/quesadillas-2124910-960-720-640x427.jpg?x11474"
        },
        {
            "id": "6",
            "name": "Tacos de carne",
            "imagen":"https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg"
        }
    ]

    return(
            <FlatList
            data = { TrendingMenu }
            keyExtractor = { item => item.id }
            renderItem = { ListItem }
            />
        
            
        
    )
}