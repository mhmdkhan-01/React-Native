import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import {addCourse} from '../Data/Lists/Courses'
const AddCourse = ({navigation}) => {
    const [title, setTitle]=useState('');
    const [code, setCode]=useState('');
    
    const CourseAdd=()=>{
        if(!title || !code)
            return;
        addCourse(title, code);
        setTitle('');
        setCode('');
    }
  return (
    <SafeAreaView>
        <View style={style.header}>
            <View style={style.lheader}>
               <Pressable onPress={()=>navigation.goBack()}>
                <Feather name="chevron-left" size={22} color="#FFFFFF" />
                </Pressable>
                <Text style={style.lheadertxt}>Add Course</Text>
            </View>
            <View style={style.rheader}>
                <Image source={require('../Images/hlogo.png')} style={{width:50, height:50}} />
                <Text style={style.rheadertxt}>{'Attendance\nManagement'}</Text>
            </View>
        </View>
        <Image source={require('../Images/addcoursehd.png')} resizeMode='cover' style={{width:'100%', height:120}}/>
        <View style={style.inputcontainer}>
            <View style={style.inpheader}>
                <Text style={style.inplabelhdr}>Course Title</Text>
                <Text style={{color:'red', fontWeight:'bold'}}>*</Text>
            </View>
            <View style={style.inpbox}>
            <Feather name='book-open' size={20} color="gray"/>
                <TextInput style={{width:'100%'}} placeholder='Enter course title' value={title} onChangeText={setTitle} />
            </View>
        </View>
        <View style={style.inputcontainer}>
            <View style={style.inpheader}>
                <Text style={style.inplabelhdr}>Course Code</Text>
                <Text style={{color:'red', fontWeight:'bold'}}>*</Text>
            </View>
            <View style={style.inpbox}>
            <Feather name='tag' size={20} color="gray"/>
                <TextInput style={{width:'100%'}} placeholder='Enter course code' value={code} onChangeText={setCode} />
            </View>
            <Text style={{color:'gray', fontSize:12}}>e.g CS101, Math202, PF102</Text>
        </View>
        <Pressable style={style.button} onPress={CourseAdd}>
            <Text style={style.btntxt}>Save Course</Text>
            <View style={style.btnicon}><Feather name="arrow-right" size={20} color="#FFFF"/></View>
        </Pressable>
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#0055d5',
        padding:5,
        paddingHorizontal:8,
        alignItems:'center'
    },
    lheader:{
        flexDirection:'row',
        gap: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    rheader:{
        flexDirection:'row',
        alignItems:'center'
    },
    lheadertxt:{
        color:"white",
        fontSize:18,
        fontWeight:'bold'
    },
    rheadertxt:{
        color:"white",
        fontSize:14,
    },
    inputcontainer:{
        marginTop:15,
        marginHorizontal:25,
    },
    inpheader:{
        flexDirection:'row',
        gap:5
    },
    inplabelhdr:{
        fontWeight:'bold',
        fontSize:17
    },
    inpbox:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:8,
        borderColor:'lightgray',
        padding:5,
        paddingLeft:10,
        marginTop:10,
        gap:10
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        backgroundColor:'#0055d5',
        padding:10,
        margin:25,
        justifyContent:'center',
        borderRadius:10
    },
    btntxt:{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
    },
    btnicon:{
        position:'absolute',
        right:15
    }
});
export default AddCourse