import React from "react";
import { Task } from "./interface";

interface TaskListProps {
  tasks: Task[];
  onAssign: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onAssign }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="flex flex-1 flex-row gap-4">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className=" pl-2">
                <button
                  className="p-2 bg-blue-700 rounded-sm"
                  onClick={() => onAssign(task.id)}
                >
                  Assign
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
