import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import { Dropdown } from 'react-native-element-dropdown'
import { getCourses } from '../Data/Lists/Courses'
import { RadioButton } from 'react-native-paper'
import {addClass} from '../Data/Lists/Classes'
const AddClass = ({navigation}) => {
    const [subject, setSubject]=useState();
    const [discipline, setDiscipline]=useState('CS');
    const [semester, setSemester]=useState();
    const [section, setSection]=useState();
    const lofcourses= getCourses().map((item, index)=>{
        return ({
            title:item.courseTitle,
            name:item.courseTitle
        })
    });
    const lofsemesters=[
        {sem:'1'}, {sem:'2'}, {sem:'3'}, {sem:'4'}, {sem:'5'}, {sem:'6'}, {sem:'7'}, {sem:'8'}, 
    ];
    const lofsections=[
        {sec:'A'},{sec:'B'},{sec:'C'},{sec:'D'},{sec:'E'},
    ];
    const disciplines=[
        {
            title:'CS',
            subtitle:'Computer Science'
        },
        {
            title:'AI',
            subtitle:'Artificial Intellegence'
        },
        {
            title:'SE',
            subtitle:'Software Engineering'
        }
    ];

    const SaveClass=()=>{
        if(!subject || !discipline|| !semester|| !section)
            return;
        addClass(subject, discipline, semester, section);
        setSubject(); setDiscipline('CS'); setSection(); setSemester();
    }

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
        <View style={style.header}>
            <View style={style.lheader}>
               <Pressable onPress={()=>navigation.goBack()}>
                <Feather name="chevron-left" size={22} color="#FFFFFF" />
                </Pressable>
                <Text style={style.lheadertxt}>Add Class</Text>
            </View>
            <View style={style.rheader}>
                <Image source={require('../Images/hlogo.png')} style={{width:50, height:50}} />
                <Text style={style.rheadertxt}>{'Attendance\nManagement'}</Text>
            </View>
        </View>
        <View style={style.headingbox}>
            <Text style={style.headingtitle}>Add Class</Text>
            <Text style={style.headingsub}>{'Create a new class and assign it to a\nsubject with class details.'}</Text>
        </View>
        <View style={style.inputcontainer}>
            <View style={style.inpheader}>
                <Text style={style.inplabelhdr}>Subject (Course)</Text>
                <Text style={{color:'red', fontWeight:'bold'}}>*</Text>
            </View>
            <View style={style.inpbox}>
            <Feather name='book-open' size={20} color="gray"/>
                <Dropdown data={lofcourses} labelField='name' valueField='name' placeholder='Select Subject' style={style.dropdown} onChange={(item)=>setSubject(item.name)} value={subject} />
            </View>
        </View>
        <View style={style.inputcontainer}>
            <View style={style.inpheader}>
                <Text style={style.inplabelhdr}>Discipline</Text>
                <Text style={{color:'red', fontWeight:'bold'}}>*</Text>
            </View>
            <View style={style.radios}>
                {
                    disciplines.map((item, index)=>{
                        return(<View key={index} style={[style.radiobtn, {backgroundColor:discipline==item.title?'#e7edfa':'white'}]}>
                            <RadioButton status={discipline==item.title?'checked':'unchecked'} onPress={()=>setDiscipline(item.title)} />
                            <View>
                                <Text style={style.radiotitle}>{item.title}</Text>
                                <Text style={style.radiosub}>{item.subtitle}</Text>
                            </View>
                        </View>
                        )
                    })
                }
            </View>
        </View>
        <View style={style.inputcontainer}>
            <View style={style.inpheader}>
                <Text style={style.inplabelhdr}>Semester</Text>
                <Text style={{color:'red', fontWeight:'bold'}}>*</Text>
            </View>
            <View style={style.inpbox}>
            <Feather name='book-open' size={20} color="gray"/>
                <Dropdown data={lofsemesters} labelField='sem' valueField='sem' placeholder='Select Semester (1 - 8)' style={style.dropdown} onChange={(item)=>setSemester(item.sem)} value={semester} />
            </View>

        </View>
        <View style={style.inputcontainer}>
            <View style={style.inpheader}>
                <Text style={style.inplabelhdr}>Section</Text>
                <Text style={{color:'red', fontWeight:'bold'}}>*</Text>
            </View>
            <View style={style.inpbox}>
            <Feather name='book-open' size={20} color="gray"/>
                <Dropdown data={lofsections} labelField='sec' valueField='sec' placeholder='Select Section (A - E)' style={style.dropdown} onChange={(item)=>setSection(item.sec)} value={section} />
            </View>

        </View>
        <Pressable style={style.button} onPress={SaveClass}>
            <Text style={style.btntxt}>Save Class</Text>
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
    headingbox:{
        backgroundColor:'#e3edfe',
        padding:10,
        paddingVertical:20,
    },
    headingtitle:{
        fontSize:22,
        fontWeight:'bold'
    },
    headingsub:{
        color:'gray'
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
        fontSize:15
    },
    inpbox:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:8,
        borderColor:'lightgray',
        padding:10,
        paddingLeft:10,
        marginTop:10,
        gap:10
    },
    dropdown:{
        width:'90%'
    },
    radios:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        width:'100%',
        gap:5
    },
    radiobtn:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:8,
        alignItems:'center',
        width:'33%',
        paddingVertical:5
    },
    radiotitle:{
        fontSize:12,
        fontWeight:'bold'
    },
    radiosub:{
        fontSize:6,
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        backgroundColor:'#297fff',
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
export default AddClass