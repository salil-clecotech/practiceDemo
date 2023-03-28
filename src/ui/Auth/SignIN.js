import React from "react";
import {View,StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";



export default SignIN=()=>{
    const navigation=useNavigation();
    const onsignup=()=>{
        navigation.navigate("SignUP")
    }
    return (
        <View style={styles.Container}>
           <View style={styles.Container1}>
           <Text style={styles.signin}>Sign IN Now</Text>
            <TextInput style={styles.input} placeholder="Enter Name"/>
            <TextInput style={styles.input} placeholder="password"/>
            <View style={styles.remember}>
                <Text>Remeber Me!!!</Text>
                <Text>Forget Password</Text>
            </View>
           </View>
           <View style={styles.Container2}>
            <Text style={styles.signbtn} >Sign IN</Text>
            <Text style={styles.signup}>Don't have an acccount</Text>
            <TouchableOpacity><Text style={styles.signup} onPress={onsignup}>Sign up from here</Text></TouchableOpacity>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white"     
    },
    signin:{
        textAlign:"center",
        color:'#3A67D7',
        fontSize:30,
        fontWeight:"bold"
    },
    Container1:{
        flex:1,
        backgroundColor:'white',
         marginVertical:200,       
    },
    input:{
        width:300,
        
        textAlign:"center",
        alignSelf:"center",
        paddingHorizontal:40,
        paddingVertical:10,
        fontSize:20,
        borderColor:"grey",
        marginVertical:15,
        borderWidth:1,
        borderRadius:50,
    },
    remember:{
        justifyContent:"space-around",
        flexDirection:"row",
        color:"grey"
    },
    Container2:{
        flex:1,
         marginVertical:65,      
    },
    signbtn:{
        paddingHorizontal:50,
        height:40,
        paddingVertical:0,
        width:250,
        textAlign:"center",
        alignSelf:"center",
        fontSize:30,
        backgroundColor:"#3A67D7",
        color:"white",
        borderRadius:50
    },
    signup:{
        fontSize:15,
        color:"grey",
        textAlign:"center",
        marginTop:5
    }
})