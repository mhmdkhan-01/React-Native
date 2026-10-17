import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
const Dashboard = () => {
    const quickicons=[{
        title:'Add Course',
        subtitle:'Create New Course (Subject)',
        color:'#d8fff3',
        img:require('../Images/addcourse.png')
    },{
        title:'Add Class',
        subtitle:'Create a class for a course',
        color:'#c7ebff',
        img:require('../Images/addclass.png')        
    },{
        title:'Add Schedule',
        subtitle:'Set class timing and assign subject',
        color:'#fae9c8',
        img:require('../Images/addschedule.png') 
    }];
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={style.header}>
            <View style={style.headerL}>
                <Image source={require('../Images/hlogo.png')} style={{width:60, height:60}} />
                <View style={style.headerLtxt}>
                    <Text style={style.headerLtxtHeading}>Attendance Management</Text>
                    <Text style={style.headerLtxtSub}>Track . Manage . Grow</Text>
                </View>
            </View>
        </View>
        <View style={style.welcombg}>
            <View style={{ backgroundColor: '#0055d5',}}>
            <Image source={require('../Images/dashboardbg.png')} 
            style={{width:'100%', height:100, borderTopLeftRadius:20,borderTopRightRadius:20}} />
            </View>
            <View style={style.welcomtxts}>
                <Text style={style.welcomHeading}>Welcome Back!</Text>
                <Text>Manage Your Courses, classes and attendance efficiently</Text>
            </View>
        </View>
        <View style={style.quickbuttons}>
            {quickicons.map(item=>{
                return <View style={{backgroundColor:item.color, margin:5, borderRadius:8,
                    width:'30%', height:'160'
                }}>
                    <Image source={item.img}
                    style={{width:50, height:60}} 
                    resizeMode='contain' />
                    <Text>{item.title}</Text>
                    <Text>{item.subtitle}</Text>
                </View>
            })}
        </View>
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
    header:{
        backgroundColor:'#0055d5',
        padding:5
    },
    headerL:{
        flexDirection:'row',
        alignItems:'center'
    },
    headerLtxt:{
        width:150,
        marginHorizontal:10,
    },
    headerLtxtHeading:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    headerLtxtSub:{
        fontSize:10,
        color:'#f0f0f0'
    },
    welcombg:{
        position:'relative',
    },
    welcomtxts:{
        width:'50%',
        gap:5,
        position:'absolute',
        top:'10%',
        left:'5%'
    },
    welcomHeading:{
        fontWeight:'bold',
        fontSize:20,
        
    },
    quickbuttons:{
        flexDirection:'row',
        justifyContent:'center'
    }
});
export default Dashboard