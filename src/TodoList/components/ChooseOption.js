import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ChooseOption = ({isVisible, closeModal}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      useNativeDriver={false}
      animationOutTiming={500}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationInTiming={500}>
      <View style={styles.container}>
        <Text style={[styles.option, {color: 'blue'}]}>Update Task</Text>
        <Text style={[styles.option, {color: 'red'}]}>Delete Task</Text>
        <View style={styles.line} />
        <Text style={[styles.option, {paddingTop: 7}]} onPress={closeModal}>
          Cancel
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingBottom: Platform.OS === 'ios' ? 12 : 0,
  },
  option: {
    padding: 12,
    textAlign: 'center',
    fontSize: 15,
  },
  line: {
    marginHorizontal: 16,
    height: 1,
    backgroundColor: '#eaeaea',
    marginTop: 7,
  },
});

export default React.memo(ChooseOption);
