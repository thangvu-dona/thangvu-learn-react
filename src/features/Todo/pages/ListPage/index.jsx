import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
  const [todoList, setTodoList] = useState(() => {
    const initTodoList = [
      {
        id: 1,
        title: "Eat",
        status: "new",
      },
      {
        id: 2,
        title: "Sleep",
        status: "completed",
      },
      {
        id: 3,
        title: "Code",
        status: "new",
      },
    ];
    return initTodoList;
  });
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);

    // Toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // Update todoList
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilterStatus("new");
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);
  };

  return (
    <div>
      <h3>What to do?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
