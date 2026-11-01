function TaskItem({ task }) {
  return (
    <li className="task-card">
      <span>{task.title}</span>
      <span> - {task.priority}</span>
    </li>
  );
}

export default TaskItem;

<li className={`task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`}></li>

import styled from 'styled-components';

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 10px;
  list-style: none;
  border-left: 4px solid ${(props) => (props.$priority === 'high' ? '#e63946' : '#2a9d8f')};
`;