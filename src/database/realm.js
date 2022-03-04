import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: {type: 'string', indexed: true},
    value: 'string',
    detail:'string',
    timeEnd:'date',
    completed: {type: 'bool', default: false},
  },
  primaryKey: '_id',
};

export default new Realm({
  schema: [TaskSchema],
});
