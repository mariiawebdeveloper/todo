import React, {useState} from 'react';
import '../../App.css'

function ToDo({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
                console.log(todo)
            }
            return item
        })
        setTodo(newTodo)

    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)

    }

    function saveTodo(id) {

        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    console.log(todo)

    return (
        <div>{
            todo.map(item => (

                        <div className={item.status === true ? 'item-active' : 'item-closed'} key={item.id}>
                            <div className='item-location'>{
                            edit === item.id ?
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div> : <div>{item.title} </div>
                        }
                            {
                                item.status === true ? <div>task is active</div> : <div>task is closed</div>
                            }
                        </div>
                        {
                            edit === item.id ? <div>
                                <button onClick={() => saveTodo(item.id)}>Ok</button>
                            </div> : <div className='button-location'>
                                <button onClick={() => deleteTodo(item.id)}>DELETE</button>
                                <button onClick={() => statusTodo(item.id)}>OPEN/CLOSE</button>
                                <button onClick={() => editTodo(item.id, item.title)}>EDIT</button>
                            </div>
                        }


                    </div>
                )
            )
        }</div>
    );
}

export default ToDo;