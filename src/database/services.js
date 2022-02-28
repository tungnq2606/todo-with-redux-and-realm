import realm from './realm';
import Realm from 'realm';

const {UUID} = Realm.BSON;

export const createTask = value => {
  const task = {
    _id: new UUID().toHexString(),
    value,
  };
  realm.write(() => {
    realm.create('Task', task);
  });
  return task;
};

export const getAllTasks = () => {
  return realm.objects('Task');
};

export const filterByText = text => {
  return realm.objects('Task').filtered(`value CONTAINS[c] "${text}"`);
}
