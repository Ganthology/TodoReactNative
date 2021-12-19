import Realm from 'realm';

// Create a Realm.Object class
class TodoItem extends Realm.Object {}

// Create a schema used by that class
// Basically is the properties
TodoItem.schema = {
  name: 'TodoItem',
  properties: {
    _id: 'string',
    title: 'string',
    description: 'string',
    deadline: 'string',
    status: 'string',
    isSelected: 'bool',
  },
  primaryKey: '_id',
};

// Export to use in other file
export default new Realm({schema: [TodoItem]});
