import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("´pruebas en todo reducer ", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });


  test("debe de agregar un nuevo todo", () => {

    const payload = {
        id: new Date().getTime(),
        desc: 'camilo',
        done: false
    };

    const newTodo={
        type: 'add',
        payload: payload
    }
    const state = todoReducer(demoTodos, newTodo);

    expect(state).toEqual([...demoTodos,payload]);
  });

});
