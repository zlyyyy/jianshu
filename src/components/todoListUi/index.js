import React from 'react'
import { Input, Button, List } from 'antd';
import './index.scss';

export const TodoListUi = (props) => {
  // const initialCount = 0
  // const [count, setCount] = useState(initialCount);
    return(
        <div className="todoList">
            <Input value={props.value} onChange={props.handleChange}  className="todo-input" placeholder="请输入内容" />
            <Button className="todo-btn" type="primary" onClick={props.setTodoList}>确定</Button>
            <List
                className="todo-list"
                bordered
                itemLayout="vertical"
                locale={{emptyText: '暂无数据' }}
                dataSource={props.listData}
                renderItem={(item, index) => (
                <List.Item
                extra={<Button type="danger" onClick={() =>{props.deleteTodoItem(index)}}>删除</Button>}
                >
                    <span className="text">{item}</span>
                </List.Item>
                )}
            />
            <div>
            {/* Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> */}
            </div>
        </div>
    )
}

export default TodoListUi