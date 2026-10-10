function TaskItem({ task }) {
    return (
      <li className={`task-card priority-${task.priority}`}>
        <span>{task.title}</span>
        <span> - {task.priority}</span>
      </li>
    );
  }

  export default TaskItem;
