import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask, toggleEdit }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>Start writing your task...</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleEdit={toggleEdit}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;

