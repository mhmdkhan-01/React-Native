import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import Schedules from '../Data/Lists/Schedules'

const Dashboard = () => {
    const quickicons=[{
        title:'Add Course',
        subtitle:'Create New Course (Subject)',
        color:'#d8fff3',
        arrowColor:'#00b07c',
        img:require('../Images/addcourse.png')
    },{
        title:'Add Class',
        subtitle:'Create a class for a course',
        color:'#c7ebff',
        arrowColor:'#0078b8',
        img:require('../Images/addclass.png')        
    },{ 
        title:'Add Schedule',
        subtitle:'Set class timing and assign subject',
        color:'#fae9c8',
        arrowColor:'#cc8800',
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
            {quickicons.map((item, index) => {
                return <View key={index} style={{backgroundColor:item.color, margin:5, borderRadius:8,
                    width:'31%', alignItems:'center', padding:5
                }}>
                    <Image source={item.img}
                    style={{width:50, height:60}} 
                    resizeMode='contain' />
                    <Text style={{fontWeight:'700', fontSize:14}}>{item.title}</Text>
                    <Text style={{fontSize:12, flexWrap:'wrap', textAlign:'center'}}>{item.subtitle}</Text>
                <View style={{backgroundColor:item.arrowColor, marginTop:5, borderRadius:50}}>
                    <MaterialIcons color="white" name="keyboard-arrow-right" size={25}/>
                </View>
                </View>
            })}
        </View>
        <View style={style.lsheader}>
            <Text style={style.lsheaderheading}>Today's Classes</Text>
            <View style={style.lsheaderdate}>
                <MaterialIcons name="calendar-month" size={16} color='#0099ff' />
                <Text style={style.lsdatetxt}>Thu, 3 Oct 2026</Text>
            </View>
        </View>
        {
            Schedules.map((item, index)=>{
                return (
                    <View key={index} style={style.card}>
                        {/* Class Section */}
                        <View style={style.classSection}>
                            <View style={style.iconCircle}>
                                <MaterialIcons name="groups" size={20} color="#6C5CE7" />
                            </View>
                            <View style={style.textContainer}>
                                <Text style={style.cardTitleText}>{item.className || 'BSCS - 3A'}</Text>
                                <Text style={style.cardSubtitleText}>Class</Text>
                            </View>
                        </View>

                        <View style={style.divider} />

                        {/* Subject Section */}
                        <View style={style.subjectSection}>
                            <MaterialIcons name="menu-book" size={18} color="#6C5CE7" style={style.sectionIcon} />
                            <Text style={style.cardTitleText} numberOfLines={2}>
                                {item.subject || 'Programming\nFundamentals'}
                            </Text>
                            <Text style={style.cardSubtitleText}>Subject</Text>
                        </View>

                        <View style={style.divider} />

                        {/* Time Section */}
                        <View style={style.timeSection}>
                            <Feather name="clock" size={16} color="#4A5568" style={style.sectionIcon} />
                            <Text style={style.cardTitleText}>
                                {item.time || '08:30 AM –\n09:30 AM'}
                            </Text>
                            <Text style={style.cardSubtitleText}>Time</Text>
                        </View>

                        {/* Action Button */}
                        <TouchableOpacity style={style.cardButton} onPress={() => {}}>
                            <Text style={style.cardButtonText}>Mark{'\n'}Attendance</Text>
                            <Feather name="chevron-right" size={18} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                )
            })
        }
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
        justifyContent:'center',
        marginVertical:6
    },
    lsheader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center'
    },
    lsheaderheading:{
        fontWeight:'bold',
        fontSize:18
    },
    lsheaderdate:{
        flexDirection:'row',
        gap:5,
    },
    lsdatetxt:{
        color:'#0099ff'
    },
    // Schedule Card Styles
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#F4F5F7',
    },
    classSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1.5,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F3EFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    textContainer: {
        flexShrink: 1.2,
        justifyContent: 'center',
    },
    cardTitleText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#1A202C',
        marginBottom: 2,
        lineHeight: 16,
    },
    cardSubtitleText: {
        fontSize: 8,
        color: '#8F9BB3',
    },
    divider: {
        width: 1,
        height: '70%',
        backgroundColor: '#E4E9F2',
        marginHorizontal: 8,
    },
    subjectSection: {
        flex: 1.5,
        justifyContent: 'center',
    },
    timeSection: {
        flex: 1.2,
        justifyContent: 'center',
    },
    sectionIcon: {
        marginBottom: 4,
    },
    cardButton: {
        flex: 1.3,
        flexDirection: 'row',
        backgroundColor: '#0055d5',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 6,
    },
    cardButtonText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 14,
    },
});

export default Dashboard