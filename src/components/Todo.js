import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo, deleteTodo, removeTodo } from "../actions";
import "./Todo.css";

const Todo = (props) => {
  console.log(props.data.todoReducers.list);

  const [inputData, setInputData] = useState("");

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add items .."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => {
                props.addTodo(inputData);
                setInputData("");
              }}
            ></i>
          </div>
          <div className="showItems">
            {props.data.todoReducers.list.map((element) => {
              return (
                <>
                  <div className="eachItem" key={element.id}>
                    <h3>{element.data}</h3>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => {
                        props.deleteTodo(element.id);
                      }}
                    ></i>
                  </div>
                </>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              style={{ outline: "none", border: "0px", borderRadius: "8px" }}
              onClick={() => {
                props.removeTodo();
              }}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);

  return {
    data: state,
  };
};

export default connect(mapStateToProps, {
  addTodo: addTodo,
  deleteTodo: deleteTodo,
  removeTodo: removeTodo,
})(Todo);
