import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {validate} from '../Data/Lists/Users.js'
const Login = ({navigation}) => {
    const [reg, setReg]=useState('');
    const [password, setPassword]=useState('');
    const [isHidden, setHidden]=useState(true);
    const [errormsg, setErrorMsg]=useState();
    const submitDetails=()=>{
        setErrorMsg();
        let isvalid=validate(reg, password);
       if(isvalid)
       {
            navigation.navigate('Dashboard');
       }
       else{
        setErrorMsg('Invalid Credentials');
       }
    }

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{backgroundColor:'white', flex:1, paddingHorizontal:35}}>
           
                <Image source={require('../Images/logo.png')} style={{height:'200', width:'200', alignSelf:'center'}}
                    resizeMode='stretch'
                />
                <View style={style.imgText}>
                    <Text>Smarter Attendance for a Brighter Tomorrow</Text>
                </View>
                <View style={style.inputs}>
                    <TextInput style={style.input} placeholder='Registration No.'  onChangeText={setReg} value={reg} />
                    <TextInput style={style.input} placeholder='Password'  onChangeText={setPassword} value={password}
                    secureTextEntry={isHidden}
                    />
                    <Text style={style.error}>{errormsg}</Text>
                </View>
                <Pressable style={style.button} onPress={submitDetails}>
                    <Text style={[style.buttontxt]}>Login</Text>
                    
                    <Text style={[
                        style.buttontxt,
                        {position:'absolute', right:10, fontSize:30, top:'50%',
                        transform:'translate(-50%, -50%)'}]}>→</Text>
                </Pressable>

        </View>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
    imgText:{
        backgroundColor:'#d7ebfe',
        borderRadius:18,
        marginVertical:10,
        padding:6,
        alignItems:'center'
    },
    inputs:{
        marginVertical:15,
        gap:20
    },
    input:{
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:8,
        paddingHorizontal:7,
        fontSize:16
    },
    error:{
        color:'red'
    },
    button:{
        flexDirection:'row',
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1194ff',
        borderRadius:8,
        position:'relative'
    },
    buttontxt:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
});
export default Login