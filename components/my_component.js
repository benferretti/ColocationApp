import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector, useCallback} from 'react-redux'

const MyComponent = () => {
    const film = useSelector(state => state.film);
    const dispatch = useDispatch();

    const actionFavorite = () => {
        console.log(film)
        dispatch({ type: "TEST1", film: "La reine des neiges" });
        }
    ;

    return (
      <View>
        <Text>{film}</Text>
        <Button title="Utiliser redux" onPress={actionFavorite}></Button>
      </View>
    );
  }

  export default MyComponent;