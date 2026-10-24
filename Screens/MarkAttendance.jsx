import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { addStudent, getStudents, markatt } from '../Data/Lists/Students';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const MarkAttendanceScreen = ({ navigation, route }) => {
  const { todaysClasses } = route.params || {};
  const [students, setStudents] = useState([]);
  const [totalpresents, setTotPres] = useState();
  const [totalAbsents, setTotAbs] = useState();
  const [refresh, setRefresh] = useState('A');
  const [showModal, setShowModal] = useState(false);
  const [stdRegno, setStdRegNo] = useState('');
  const [stdName, setStdName] = useState('');
  useEffect(() => {
    let ss = getStudents();
    setStudents(ss);
    let pres = ss.filter(s => s.attendance == 'P').length;
    setTotPres(pres);
    let abs = ss.filter(s => s.attendance == 'A').length;
    setTotAbs(abs);
  }, [refresh]);
  const toggleAttendance = index => {
    markatt(index);
    setRefresh(refresh == 'A' ? 'B' : 'A');
  };
  const clearinps = () => {
    setStdName('');
    setStdRegNo('');
  };

  const addToList = () => {
    addStudent(stdRegno, stdName);
    clearinps();
  };
  const showData = ({ item, index }) => {
    return (
      <View style={style.listrow}>
        <Text style={{ flex: 0.75 }}>{index + 1}</Text>
        <Text style={{ flex: 2 }}>{item.regno}</Text>
        <Text style={{ flex: 2 }}>{item.name}</Text>
        <Pressable
          onPress={() => toggleAttendance(index)}
          style={{
            borderRadius: 7,
            paddingVertical: 5,
            flex: 1,
            backgroundColor: item.attendance == 'P' ? '#d3ffd3' : '#ffd3d3',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: item.attendance == 'P' ? '#008700' : '#870000',
            }}
          >
            {item.attendance}
          </Text>
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={style.header}>
        <View style={style.lheader}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={22} color="#FFFFFF" />
          </Pressable>
          <Text style={style.lheadertxt}>Mark Attendance</Text>
        </View>
        <View style={style.rheader}>
          <Image
            source={require('../Images/hlogo.png')}
            style={{ width: 50, height: 50 }}
          />
          <Text style={style.rheadertxt}>{'Attendance\nManagement'}</Text>
        </View>
      </View>
      <View style={style.detailsContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[style.iconContainer, { backgroundColor: '#c7e4ff' }]}>
            <FontAwesome5 name="book-open" color={'#369eff'} size={18} />
          </View>
          <View style={{ width: 170 }}>
            <Text style={style.detailscontheadingtxt}>
              {todaysClasses?.subjectName}
            </Text>
            <Text
              style={style.detailscontsubtxt}
            >{`${todaysClasses.className}`}</Text>
          </View>
        </View>
        <View style={style.daytime}>
          <Feather name="calendar" size={20} color="#369eff" />
          <View>
            <Text style={style.day}>{todaysClasses.day}</Text>
            <Text style={style.time}>{todaysClasses.time}</Text>
          </View>
        </View>
      </View>
      <View style={style.dateContainer}>
        <Text style={style.dateheadtxt}>Date</Text>
        <View style={style.fulldatebox}>
          <Feather name="calendar" size={20} color="gray" />
          <Text>Tue, 03 Oct 2026</Text>
        </View>
      </View>
      <View style={style.listPortion}>
        <View style={style.listcounts}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 16 }}
          >{`Students (${students.length})`}</Text>
          <View style={style.presnabs}>
            <View style={style.prescountbox}>
              <Text
                style={style.prescounttxt}
              >{`Present ${totalpresents}`}</Text>
            </View>
            <View style={style.abscountbox}>
              <Text style={style.abscounttxt}>{`Absent ${totalAbsents}`}</Text>
            </View>
          </View>
        </View>
        <View style={style.listheader}>
          <Text style={{ flex: 0.75 }}>#</Text>
          <Text style={{ flex: 2 }}>Reg. No</Text>
          <Text style={{ flex: 2 }}>Student Name</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>Status</Text>
          </View>
        </View>

        <FlatList data={students} renderItem={showData} />
      </View>
      <Pressable onPress={() => setShowModal(true)}>
        <View style={style.addiconcontainer}>
          <MaterialIcons name="add" size={22} color="white" />
        </View>
      </Pressable>
      <Modal visible={showModal} style={style.addstdpopup}>
        <Pressable onPress={() => setShowModal(false)}>
          <View style={{ alignSelf: 'flex-end' }}>
            <MaterialIcons name="close" color="gray" size={20} />
          </View>
        </Pressable>
        <View style={[style.popupdetailsContainer]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[style.iconContainer, { backgroundColor: '#c7e4ff' }]}>
              <MaterialIcons name="person-add" color={'#369eff'} size={18} />
            </View>
            <View>
              <Text style={style.detailscontheadingtxt}>Add Student</Text>
              <Text
                style={[style.detailscontsubtxt, { width: 200 }]}
              >{`Enter Student Registration Number and name to add to this class`}</Text>
            </View>
          </View>
        </View>

        <View style={style.inputcontainer}>
          <View style={style.inpheader}>
            <Text style={style.inplabelhdr}>Registration Number</Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>*</Text>
          </View>
          <View style={style.inpbox}>
            <FontAwesome5 name="id-card" size={20} color="gray" />
            <TextInput
              style={{ width: '100%' }}
              placeholder="Enter registration number"
              value={stdRegno}
              onChangeText={setStdRegNo}
            />
          </View>
          <Text style={{ fontSize: 12, color: 'gray' }}>e.g 2024-CS-0001</Text>
        </View>
        <View style={style.inputcontainer}>
          <View style={style.inpheader}>
            <Text style={style.inplabelhdr}>Student Name</Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>*</Text>
          </View>
          <View style={style.inpbox}>
            <Feather name="user" size={20} color="gray" />
            <TextInput
              style={{ width: '100%' }}
              placeholder="Enter student name "
              value={stdName}
              onChangeText={setStdName}
            />
          </View>
          <Text style={{ fontSize: 12, color: 'gray' }}>e.g Ali Raza</Text>
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
      </Modal>
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
  detailsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  detailscontheadingtxt: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  detailscontsubtxt: {
    color: 'gray',
    fontSize: 12,
  },
  daytime: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#d5ebff',
    borderRadius: 12,
  },
  day: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  time: {
    fontSize: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 7,
  },
  dateheadtxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fulldatebox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 7,
    gap: 6,
  },
  listPortion: {
    paddingHorizontal: 12,
    paddingTop: 7,
    backgroundColor: '#f9f6f6',
    flex: 1,
  },
  listcounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  presnabs: {
    flexDirection: 'row',
    gap: 8,
  },
  prescountbox: {
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 6,
    backgroundColor: '#d3ffd3',
  },
  abscountbox: {
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 6,
    backgroundColor: '#ffd3d3',
  },
  prescounttxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#00ad00',
  },
  abscounttxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#ad0000',
  },
  listheader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3e1e1',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  listrow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  popupdetailsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  addiconcontainer: {
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: '#0055d5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    bottom: 20,
  },
  addstdpopup: {
    backgroundColor: 'white',
    marginVertical: 150,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  inputcontainer: {
    marginTop: 25,
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
    padding: 5,
    paddingLeft: 10,
    marginTop: 10,
    gap: 10,
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
    marginVertical: 20,
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
});

export default MarkAttendanceScreen;
