import realm from './realm';
import Realm from 'realm';

const {UUID} = Realm.BSON;

export const createTask = data => {
  const {value, detail, timeEnd} = data;
  const task = {
    _id: new UUID().toHexString(),
    value,
    detail,
    timeEnd,
  };
  realm.write(() => {
    realm.create('Task', task);
  });
  return task;
};

export const getAllTasks = () => {
  return realm.objects('Task').toJSON();
};

export const filterByText = text => {
  return realm.objects('Task').filtered(`value CONTAINS[c] "${text}"`);
};

export const updateStatus = (id, status) => {
 const tasks = realm.objects('Task').toJSON();
  const task = tasks.find(item => item._id === id);
  realm.write(() => {
    task.completed = status;
  });
  return task;
};
