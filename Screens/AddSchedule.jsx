import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { CalendarClock } from 'lucide-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  getSchedules,
  addSchedule,
  deleteSchedule,
} from '../Data/Lists/Schedules';
import { getClasses } from '../Data/Lists/Classes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const AddSchedule = ({ navigation }) => {
  const [subject, setSubject] = useState({ name: null });
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const [refresh, setRefresh] = useState(false);
  const lofsubjects = getClasses().map(item => {
    return {
      name: item.subjectTitle,
      section: `BS${item.discipline} - ${item.semester}${item.section}`,
    };
  });
  const lofdays = [
    { name: 'Monday' },
    { name: 'Tuesday' },
    { name: 'Wednesday' },
    { name: 'Thursday' },
    { name: 'Friday' },
  ];
  const loftimes = [
    { time: '08:30 AM - 09:30 AM' },
    { time: '09:30 AM - 10:30 AM' },
    { time: '10:30 AM - 11:30 AM' },
    { time: '11:30 AM - 12:30 PM' },
    { time: '12:30 PM - 01:30 PM' },
    { time: '01:30 PM - 02:30 PM' },
    { time: '02:30 PM - 03:30 PM' },
    { time: '03:30 PM - 04:30 PM' },
  ];
  const schedules = getSchedules().map(item => {
    return {
      id: item.id,
      subjectName: item.subjectName,
      day: item.day,
      time: item.time,
      section: item.className,
    };
  });
  const totalSchedules = schedules.length;

  const clearinps = () => {
    setSubject({ name: null });
    setTime();
    setDay();
  };

  const addToList = () => {
    if (!subject.name || !day || !time) return;
    addSchedule(totalSchedules + 1, subject.section, subject.name, day, time);
    clearinps();
  };

  const delSchedule = id => {
    deleteSchedule(id);
    setRefresh(!refresh);
  };

  const randiconcolors = [
    '#369eff',
    '#42fc67',
    '#ff933b',
    '#8534ff',
    '#ff3737',
  ];
  const randiconbgcolors = [
    '#c7e4ff',
    '#d7ffdf',
    '#ffecdd',
    '#e8d8ff',
    '#ffd0d0',
  ];

  const showSchedules = ({ item, index }) => {
    const bgColor = randiconbgcolors[index % randiconbgcolors.length];
    const iconColor = randiconcolors[index % randiconcolors.length];

    return (
      <View style={style.cardContainer}>
        <View style={[style.iconContainer, { backgroundColor: bgColor }]}>
          <FontAwesome5 name="book-open" color={iconColor} size={18} />
        </View>

        <View style={style.infoContainer}>
          <Text style={style.titleText} numberOfLines={3}>
            {item.subjectName}
          </Text>
          <Text style={style.sectionText}>{item.section}</Text>
        </View>

        <View style={style.divider} />

        <View style={style.scheduleContainer}>
          <View style={style.row}>
            <Feather
              name="calendar"
              size={14}
              color="#2563eb"
              style={style.iconMargin}
            />
            <Text style={style.metaText}>{item.day}</Text>
          </View>
          <View style={style.row}>
            <Feather
              name="clock"
              size={14}
              color="#2563eb"
              style={style.iconMargin}
            />
            <Text style={style.metaText}>{item.time}</Text>
          </View>
        </View>

        <View style={style.divider} />

        <View style={style.actionsContainer}>
          <Pressable hitSlop={8} style={style.actionBtn}>
            <MaterialIcons name="edit" size={20} color="#2563eb" />
          </Pressable>

          <View style={style.smallDivider} />

          <Pressable
            hitSlop={8}
            style={style.actionBtn}
            onPress={() => delSchedule(item.id)}
          >
            <MaterialIcons name="delete" size={20} color="#ef4444" />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.header}>
        <View style={style.lheader}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={22} color="#FFFFFF" />
          </Pressable>
          <Text style={style.lheadertxt}>Add Class Schedule</Text>
        </View>
        <View style={style.rheader}>
          <Image
            source={require('../Images/hlogo.png')}
            style={{ width: 50, height: 50 }}
          />
          <Text style={style.rheadertxt}>{'Attendance\nManagement'}</Text>
        </View>
      </View>
      <View style={style.addschedulebox}>
        <View style={style.addheader}>
          <CalendarClock size={45} color={'#2081ff'} />
          <View>
            <Text style={style.addtitle}>Add Class Schedule</Text>
            <Text style={style.addsubtitle}>
              {'Select your subject, day and time to create\na class schedule'}
            </Text>
          </View>
        </View>
        <View style={style.inputcontainer}>
          <View style={style.inpheader}>
            <Text style={style.inplabelhdr}>Subject</Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>*</Text>
          </View>
          <View style={style.inpbox}>
            <Feather name="book-open" size={20} color="gray" />
            <Dropdown
              data={lofsubjects}
              labelField="name"
              valueField="name"
              placeholder="Select Subject"
              style={style.dropdown}
              onChange={item => setSubject(item)}
              value={subject.name}
            />
          </View>
        </View>
        <View style={style.inputcontainer}>
          <View style={style.inpheader}>
            <Text style={style.inplabelhdr}>Day</Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>*</Text>
          </View>
          <View style={style.inpbox}>
            <Feather name="calendar" size={20} color="gray" />
            <Dropdown
              data={lofdays}
              labelField="name"
              valueField="name"
              placeholder="Select Day"
              style={style.dropdown}
              onChange={item => setDay(item.name)}
              value={day}
            />
          </View>
        </View>
        <View style={style.inputcontainer}>
          <View style={style.inpheader}>
            <Text style={style.inplabelhdr}>Time Slot</Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>*</Text>
          </View>
          <View style={style.inpbox}>
            <Feather name="clock" size={20} color="gray" />
            <Dropdown
              data={loftimes}
              labelField="time"
              valueField="time"
              placeholder="Select Time Slot"
              style={style.dropdown}
              onChange={item => setTime(item.time)}
              value={time}
            />
          </View>
        </View>

        <View style={style.buttons}>
          <Pressable style={style.button} onPress={clearinps}>
            <MaterialIcons name="refresh" size={20} color="#0066FF" />
            <Text style={[style.btntxt, style.clrbtntxt]}>Clear</Text>
          </Pressable>
          <Pressable style={[style.button, style.addbtn]} onPress={addToList}>
            <MaterialIcons name="add" size={20} color="white" />
            <Text style={[style.btntxt, style.addbtntxt]}>Add to List</Text>
          </Pressable>
        </View>
      </View>

      <View style={style.lsheader}>
        <Text style={style.lsheadertitle}>Scheduled Classes</Text>
        <View style={style.lscounttag}>
          <Text style={style.tagtxt}>Total: {totalSchedules}</Text>
        </View>
      </View>
      <FlatList data={schedules} renderItem={showSchedules} />
      <Pressable
        style={({ pressed }) => [style.saveBtn, pressed && style.btnPressed]}
      >
        <Feather name="save" size={18} color="#ffffff" style={style.btnIcon} />
        <Text style={style.btnText}>Save Schedule</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0055d5',
    padding: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  lheader: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lheadertxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rheadertxt: {
    color: 'white',
    fontSize: 14,
  },
  addschedulebox: {
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addheader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  addtitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  addsubtitle: {
    color: 'gray',
  },
  inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inpheader: {
    flexDirection: 'row',
    gap: 5,
  },
  inplabelhdr: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  inpbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightgray',
    padding: 10,
    paddingLeft: 10,
    marginTop: 10,
    gap: 10,
    width: '70%',
  },
  dropdown: {
    width: '90%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#0066ff',
    marginTop: 10,
  },
  btntxt: {
    fontWeight: 'bold',
  },
  clrbtntxt: {
    color: '#0066ff',
  },
  addbtn: {
    backgroundColor: '#0066ff',
  },
  addbtntxt: {
    color: 'white',
  },
  lsheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  lsheadertitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lscounttag: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  tagtxt: {
    fontSize: 10,
  },

  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 6,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  infoContainer: {
    flex: 2.2, // Gives the title area more priority over the rest
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 2,
    flexShrink: 1, // Prevents overflow text from pushing adjacent elements
  },
  sectionText: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '500',
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: '#f1f5f9',
    marginHorizontal: 8,
  },
  scheduleContainer: {
    flex: 1.8, // Allocates a proportional fixed share of space for day/time
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
  },
  iconMargin: {
    marginRight: 4,
  },
  metaText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#475569',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    padding: 2,
  },
  smallDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#f1f5f9',
    marginHorizontal: 4,
  },
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066ff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 10,
    // iOS Shadow
    shadowColor: '#0066ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // Android Elevation
    elevation: 3,
  },
  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  btnIcon: {
    marginRight: 8,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});

export default AddSchedule;
