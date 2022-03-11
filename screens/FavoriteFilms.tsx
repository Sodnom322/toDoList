import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { useSelector } from "react-redux";
import { Card } from "../components/Card";

import { RootState } from "../store";



const FavoriteFilms: React.FC = () => {
  const films = useSelector((state: RootState) => {
    return state.films.favoritesFilms
  })

  return (

    <ScrollView style={styles.container} >
      {
        films.map((item, index) => <Card key={item.id} {...item}></Card>)
      }
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 15,

  }
})

export { FavoriteFilms }