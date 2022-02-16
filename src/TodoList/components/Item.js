import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({item}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="radio-button-off-sharp" size={20} />
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  value: {
    marginLeft: 10,
  },
});

export default Item;
