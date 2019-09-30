import React, { Component } from 'react';
import store from './store'
import { getTodoList, getInputChangeAction, getTodoListAddAction, getTodoListDeleteAction } from './store/actionCreator'
import TodoListUi from './components/todoListUi'

class App extends Component {
	constructor(props){
		super(props);
		console.log(store.getState())
		this.state = store.getState()
		this.handleStateChange = this.handleStateChange.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.setTodoList = this.setTodoList.bind(this)
		this.deleteTodoItem = this.deleteTodoItem.bind(this)
		store.subscribe(this.handleStateChange)
	}
	componentDidMount() {
	   	store.dispatch(getTodoList())
	}
	handleStateChange = () => {
		this.setState(store.getState())
	}
	handleChange = e => {
		const {value} = e.target
		const action = getInputChangeAction(value)
		store.dispatch(action)
	}
	setTodoList = () => {
		const action = getTodoListAddAction()
		store.dispatch(action)
	}
	deleteTodoItem = (index) => {
		const action = getTodoListDeleteAction(index)
		store.dispatch(action)
	}
	render() {
		const { value, listData } = this.state
		return (
			<TodoListUi
				value={value}
				handleChange={this.handleChange}
				setTodoList={this.setTodoList}
				listData={listData}
				deleteTodoItem={this.deleteTodoItem}
			/>
		);
	}
}

export default App;
