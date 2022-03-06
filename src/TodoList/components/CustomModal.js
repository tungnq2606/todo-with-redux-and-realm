import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {addTodo} from '../todoSlice';

const {width} = Dimensions.get('window');
const CustomModal = ({isVisible, closeModal}) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState('');
  const [detail, setDetail] = useState('');
  const dispatch = useDispatch();

  const handleTaskChange = text => {
    setTaskName(text);
  };

  const handleDetailChange = text => {
    setDetail(text);
  };

  const addTask = () => {
    const data = {
      value: taskName,
      detail,
      timeEnd: new Date(date),
    };
    dispatch(addTodo(data));
    setTaskName('');
    setDetail('');
    setDate(new Date());
    closeModal();
  };

  const handleChangePicker = () => setOpenPicker(pre => !pre);
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      useNativeDriver={false}
      animationOutTiming={500}
      animationInTiming={500}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Your task name"
            value={taskName}
            onChangeText={handleTaskChange}
          />
          <Text style={styles.title}>DETAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task detail"
            value={detail}
            onChangeText={handleDetailChange}
          />
          <Text style={styles.title}>DATE</Text>
          <TouchableOpacity style={styles.input} onPress={handleChangePicker}>
            <TextInput
              placeholder="End time"
              editable={false}
              value={moment(date).format('DD-MM-YYYY HH:mm')}
              style={{flex: 1, color: '#000'}}
            />
            <Entypo name="calendar" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.label}>Create new task</Text>
          </TouchableOpacity>
          <AntDesign
            name="closecircleo"
            size={22}
            style={styles.icon}
            onPress={closeModal}
          />
        </View>
        <DatePicker
          modal
          open={openPicker}
          title="Select time end"
          date={date}
          androidVariant="iosClone"
          onConfirm={date => {
            setOpenPicker(false);
            setDate(date);
          }}
          onCancel={handleChangePicker}
        />
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    width: width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  input: {
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    fontSize: 15,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#6e6e6e',
    marginTop: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#2DA9FA',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 40,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
export default React.memo(CustomModal);
