const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [...tasks, { ...action.task }];
    }
    default: {
      throw Error(`Unknown type ${action.type}`);
    }
  }
};

export default taskReducer;
