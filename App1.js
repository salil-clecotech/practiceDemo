import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useState } from "react";
import CheckBox from '@react-native-community/checkbox';

export default App = () => {
    const [textarr, onsettextarr] = useState([])

    const [arr, onarr] = useState([{ id: 1, checkbox: false, name: "test1" }, { id: 2, checkbox: false, name: "test2" }, { id: 3, checkbox: false, name: "test3" }, { id: 4, checkbox: false, name: "test4" }])
    const item = () => {
        setitems()
    }
    const oncheck = (index) => {
        var temp = arr;
        temp[index].checkbox = !temp[index].checkbox;
        console.log(temp, 'temp')
        onarr(temp)
        var temp1 = textarr;
        let indext = temp1.indexOf(temp[index].name);
        console.log(indext, 'indext')
        if (indext >= 0) {
            temp1 = temp1.filter((value) => value != temp[index].name);
            { e.arr.name }

        }
        onsettextarr(temp1)
        console.log(temp1, 'temp1')

    }
    return (
        <View style={styles.container}>
            <Text style={styles.List}>List of .......</Text>
            {
                arr.map((element, index) => {
                    return (
                        <View key={element.id} >
                            <CheckBox value={element.checkbox} onValueChange={() => oncheck(index)} />
                            <Text style={{ color: 'black' }}>{element.name}</Text>
                        </View>
                    )
                })
            }
            {
                textarr.map((element, index) =>
                (
                    <Text style={{ color: 'black' }} key={index}>{element}</Text>
                )
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"#3A67D7"
    },
    List: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 30
    }
})