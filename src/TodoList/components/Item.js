import moment from 'moment';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <Ionicons
        name={item?.completed ? 'checkmark-circle' : 'radio-button-off-sharp'}
        size={25}
        color={item?.completed ? '#2DA9FA' : '#000'}
      />
      <View style={styles.content}>
        <Text style={[styles.title, item?.completed && styles.completed]}>
          {item?.value || ''}
        </Text>
        <Text style={[styles.detail, item?.completed && styles.completed]}>
          {item?.detail || ''}
        </Text>
      </View>
      <Text style={[styles.date, item?.completed && styles.completed]}>
        {moment(item?.timeEnd).format('DD-MM-YYYY HH:mm')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  detail: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  date: {
    width: 80,
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 12,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default Item;
