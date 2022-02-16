import React, {useState} from 'react';
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
import {todoListSelector, todosRemainingSelector} from '../redux/selectors';
import Item from './components/Item';
import todoSlice from './todoSlice';

const TodoList = () => {
  const [todoName, setTodoName] = useState('');

  const todoList = useSelector(todosRemainingSelector);
  const renderItem = ({item}) => <Item {...{item}} />;
  const dispatch = useDispatch();

  const todoChange = text => {
    setTodoName(text);
  };

  const handleAddButton = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: todoList.length + 1,
        value: todoName,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Todo With Redux</Text>
        <TextInput placeholder="Search..." style={styles.search} />
        <FlatList data={todoList} renderItem={renderItem} />
      </View>
      <View style={styles.insert}>
        <TextInput
          placeholder="Enter new todo"
          style={styles.input}
          onChangeText={todoChange}
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
  },
  input: {
    flex: 1,
    borderWidth: 0.5,
    borderRightColor: '#FFF',
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#A3E4DB',
    padding: 14,
    borderWidth: 0.5,
  },
});

export default TodoList;
