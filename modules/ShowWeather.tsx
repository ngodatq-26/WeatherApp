import React from 'react'
import { Image, ImageBackground, StyleSheet, View,Text, ImageBackgroundBase } from 'react-native'
interface props {
    nameCity : string,
    temp : string,
    code : string,
    codeIcon : string,
    des : string
}

const ShowWeather = (props : props) => {

    const {temp,nameCity,code,codeIcon,des} = props;

    const textTemp = temp + " *C";

    const checkNightDay = () => {
        return codeIcon.slice(2)
    }
    console.log(checkNightDay())
    if (codeIcon.slice(3) === "d" && parseInt(code) >=700) {
        return (
            <ImageBackground style={styles.image} source={require('../assets/sunny.jpg')}>
            <Text style={styles.text}>{nameCity}</Text>
            <Text style={styles.text2}>{textTemp} </Text>
            <Text style={styles.text3}>{des}</Text>
        </ImageBackground>
        )
    }
    else if (checkNightDay() === "d" && parseInt(code) <=700) { return (
        <ImageBackground style={styles.image} source={require('../assets/cloudy.jpeg')}>
        <Text style={styles.text}>{nameCity}</Text>
        <Text style={styles.text2}>{textTemp} </Text>
        <Text style={styles.text3}>{des}</Text>
        </ImageBackground>)
    } else if (checkNightDay() === "n" && parseInt(code) <=700) { return (
        <ImageBackground style={styles.image} source={require('../assets/rainy.jpg')}>
        <Text style={styles.text}>{nameCity}</Text>
        <Text style={styles.text2}>{textTemp} </Text>
        <Text style={styles.text3}>{des}</Text>
        </ImageBackground> )
    } 
    else
    return (
        <ImageBackground style={styles.image} source={require('../assets/night2.jpg')}>
        <Text style={styles.text}>{nameCity}</Text>
        <Text style={styles.text2}>{textTemp} </Text>
        <Text style={styles.text3}>{des}</Text>
        </ImageBackground> )
}
const styles = StyleSheet.create({
    image : {
       height : 600,
       alignItems : 'center'
    },
    imageView : {
        position : 'relative'
    },
    text :{
        margin :'auto',
        fontSize : 50,
        color : 'white',
        marginTop : 50
    },
    text2 :{
        margin :'auto',
        fontSize : 50,
        color : 'red',
    },text3 : {
        margin :'auto',
        fontSize : 20,
        color : 'pink',
    }
})

export default ShowWeather