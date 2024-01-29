const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [...tasks, { ...action.task }];
    }
    case "edited": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error(`Unknown type ${action.type}`);
    }
  }
};

export default taskReducer;
