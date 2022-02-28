import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllTasks} from '../database/services';
import {todoListSelector} from '../redux/selectors';
import Item from './components/Item';
import {addTodo, filter, getTodo} from './todoSlice';

const TodoList = () => {
  const [todoName, setTodoName] = useState('');
  const [keyword,setKeyword] = useState('');

  const todoList = useSelector(todoListSelector);
  const renderItem = ({item}) => <Item {...{item}} />;
  const dispatch = useDispatch();

  const handleTodoChange = text => {
    setTodoName(text);
  };

  const handleAddButton = () => {
    dispatch(addTodo(todoName));
    setTodoName('');
  };
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleSearchChange = text => {
    setKeyword(text);
    dispatch(filter(text));
  };

  const keyExtractor = item => item._id;
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
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={styles.insert}>
        <TextInput
          placeholder="Enter new todo"
          style={styles.input}
          onChangeText={handleTodoChange}
          value={todoName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddButton}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    flex: 1,
    paddingLeft: 8,
    height: '100%',
  },
  button: {
    backgroundColor: '#A3E4DB',
    padding: 14,
    borderLeftWidth: 1,
  },
});

export default TodoList;
