// src/KanbanColumn.js
import React from 'react';
import { useDrop } from 'react-dnd';
import KanbanItem from './KanbanItem';
import './Style.scss';

const KanbanColumn = ({ title, items, status, onMove }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'kanbanItem',
    drop: () => ({ status }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver ? '#e0e0e0' : 'white' }}
      className="kanban-column"
    >
      <h3>{title}</h3>
      {items.map((item) => (
        <KanbanItem key={item.id} item={item} onMove={onMove} />
      ))}
    </div>
  );
};

export default KanbanColumn;
