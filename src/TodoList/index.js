import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {getAllTasks} from '../database/services';
import {todoListSelector} from '../redux/selectors';
import Item from './components/Item';
import {addTodo, filter, getTodo, updateTaskStatus} from './todoSlice';
import Modal from './components/CustomModal';
import ChooseOption from './components/ChooseOption';

const TodoList = () => {
  const [keyword, setKeyword] = useState('');
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const todoList = useSelector(todoListSelector);

  const renderItem = ({item}) => {
    const updateStatus = () => {
      dispatch(updateTaskStatus({id: item._id, status: !item.completed}));
    };
    return <Item {...{item}} onPress={updateStatus} onLongPress={handleUpdateModal} />;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleSearchChange = text => {
    setKeyword(text);
    dispatch(filter(text));
  };

  const keyExtractor = item => item._id;

  const handleCreateModal = () => setCreateModalVisible(prev => !prev);
  const handleUpdateModal = () => setUpdateModalVisible(prev => !prev);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Todo With Redux</Text>
        <TextInput
          placeholder="Search..."
          style={styles.search}
          value={keyword}
          onChangeText={handleSearchChange}
        />
        <FlatList
          data={todoList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.8}
        onPress={handleCreateModal}>
        <View style={styles.addButton}>
          <AntDesign name="plus" size={23} color="#FFF" />
        </View>
      </TouchableOpacity>
      <Modal isVisible={createModalVisible} closeModal={handleCreateModal} />
      <ChooseOption isVisible={updateModalVisible} closeModal={handleUpdateModal}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  search: {
    borderWidth: 0.5,
    padding: 8,
    marginTop: 32,
    marginBottom: 16,
  },
  insert: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 32,
    marginBottom: 12,
    borderWidth: 1,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#2DA9FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
});

export default TodoList;
