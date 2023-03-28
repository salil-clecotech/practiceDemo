import React from "react";
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default Splash=()=>{
    const navigation=useNavigation();
    const onsignin=()=>{
        navigation.navigate("SignIN")
    }
    const onsignup=()=>{
        navigation.navigate("SignUP")
    }
    return (
        <View style={styles.Container}>
            <View style={styles.Container1}>
            <Text style={styles.Welcome}>Welcome to BTC exchange</Text>
            <Text style={styles.Para}>we are offering digita asset exchange</Text>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity onPress={onsignup}>
            <Text style={styles.signup}>SignUP</Text>
            </TouchableOpacity>
            <Text style={styles.signin}>Already a member?</Text>
            <TouchableOpacity onPress={onsignin}>
            <Text style={styles.signin} >Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#3A67D7'       
    },
    Container1:{
        flex:2,
        backgroundColor:'#3A67D7'      
    },
    Welcome:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        marginTop:50
    },
    Para:{
        fontSize:20,
        color:"white",
        textAlign:"center",
        marginTop:50
    },
    container2:{
        flex:.8
    },
    signup:{
        fontSize:20,
        backgroundColor:"white",
        color:'#3A67D7',
        textAlign:"center",
        marginVertical:50,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        width:300,
        alignSelf:"center",
    },
    signin:{
        color:"white",
        fontSize:15,
        margin:5,
        textAlign:"center"
    }

})