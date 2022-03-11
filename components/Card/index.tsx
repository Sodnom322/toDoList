import React, { useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet, Image, Dimensions,  Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Film } from "../../interfaces"
import { RootState } from "../../store"
import { setFavoriteFims } from "../../store/films"

interface Props extends Film {

}
const widthScreen = Dimensions.get('screen').width - 30 - 30

interface Sizes {
    width: number
    height: number
}

const Card: React.FC<Props> = (props) => {
    const [size, setSize] = useState<Sizes>({
        width: 0,
        height: 0
    })
    const {isInFavorites} = useSelector((state: RootState) => ({
        isInFavorites: !!state.films.favoritesFilms.find((item) => item.id === props.id)
    }))
    const ref = useRef<Image|null>(null)
    useEffect(() => {
        const success = (width: number, height: number) => {
            setSize({
                width: widthScreen,
                height: widthScreen / width * height
            })
        }
        Image.getSize(props.image, success);
    },[])
    const dispatch = useDispatch()

    function onPress(){
        dispatch(setFavoriteFims(props))
    }
    return (
        <View style={styles.container}>
            
            <View style={styles.imageBox}>
            <Image
                ref={ref}
                style={{width: size.width, height: size.height}}  source={{
                uri: props.image
            }}
            resizeMode="cover"
            />
            </View>
            <View style={styles.textBox}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.author}>Author:  {props.director}</Text>
            </View>
            <View style={styles.btnBox}>
            <Button color='red' title="Удалить"></Button>
            <View style={styles.btnFavorite}>
            <Button onPress={onPress} title={isInFavorites ? "Удалить из избраного":"Добавить в избранные"}></Button>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageBox:{
        width: widthScreen,
    },
    image: {
        flex: 1
    },
    text:{
        fontSize:20,
        
    },
    textBox:{
        padding:20,
    },
    description:{
        fontSize:18,
        paddingTop:15,
        color:'#555'
    },
    author:{
       textAlign:'right',
       marginTop:10
    },
    btnBox:{
    flexDirection:'row',
    },
    btnFavorite:{
    justifyContent:'center',
    flexDirection:'row'
    }

})


export { Card }