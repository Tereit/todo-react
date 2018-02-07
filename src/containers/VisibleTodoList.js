import { connect } from 'react-redux';
import TodoList from '../components/todoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos) => {
    return todos;
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;