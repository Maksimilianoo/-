import React from 'react';
import styled from 'styled-components';

// Альтернативний компонент Styled Components (для Кроку 7)
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

function TaskItem({ task }) {
  // Динамічні класи для стандартного CSS (Крок 5)
  const cardClassName = `task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`;

  return (
    <li className={cardClassName}>
      <span>{task.title}</span>
      <span>{task.priority}</span>
    </li>
  );
}

export default TaskItem;