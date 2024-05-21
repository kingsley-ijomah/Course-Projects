// src/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanColumn from './KanbanColumn';
import './Style.scss';
import data from './data.json';

const KanbanBoard = () => {
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleMove = (id, newStatus) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const getColumnItems = (status) =>
    items.filter((item) => item.status === status);

  const addNewTask = () => {
    if (newTask.trim() !== '') {
      setItems([
        ...items,
        {
          id: items.length + 1,
          content: newTask,
          status: 'notStarted',
        },
      ]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNewTask();
    }
  };

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>Kanban Board</h1>
      <div className="kanban-board">
        <KanbanColumn
          title="Not Started"
          items={getColumnItems('notStarted')}
          status="notStarted"
          onMove={handleMove}
        />
        <KanbanColumn
          title="In Progress"
          items={getColumnItems('inProgress')}
          status="inProgress"
          onMove={handleMove}
        />
        <KanbanColumn
          title="Completed"
          items={getColumnItems('completed')}
          status="completed"
          onMove={handleMove}
        />
      </div>
      <div className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter new task"
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
