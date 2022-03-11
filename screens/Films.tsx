import React, { useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { RootState } from "../store";
import { getFilmsAction } from "../store/films";




const Film: React.FC = () => {
    const films = useSelector((state: RootState) => {
        return state.films.data
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilmsAction())
    }, [])
    return (

        <ScrollView style={styles.container} >
            {
                films.map((item, index) => <Card  key={item.id} {...item}></Card>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
     padding: 15,

    }
})

export { Film }