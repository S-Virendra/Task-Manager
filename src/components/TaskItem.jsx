import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { useState } from "react";

function TaskItem({ task, deleteTask, editTask, toggleEdit }) {
  const [editValue, setEditValue] = useState(task.text);

  const handleSave = () => {
    if (editValue.trim() === "") return;
    editTask(task.id, editValue);
  };

  return (
    <li className="task-item">
      {task.isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave}>
            <FaSave />
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div className="actions">
            <button className="edit-btn" onClick={() => toggleEdit(task.id)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;


