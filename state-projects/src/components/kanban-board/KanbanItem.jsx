// src/KanbanItem.js
import React from 'react';
import { useDrag } from 'react-dnd';
import './Style.scss';

const KanbanItem = ({ item, onMove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'kanbanItem',
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        onMove(item.id, dropResult.status);
      }
    },
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="kanban-item"
    >
      {item.content}
    </div>
  );
};

export default KanbanItem;
