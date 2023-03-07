import React, {useState} from 'react';
import '../../App.css'

function ToDo({todo, setTodo, currentCard, setCurrentCard}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')


    function dragStartHandler(e, item) {
        console.log('drag', item)
        setCurrentCard(item)
    }

    function dragEndHandler(e) {


    }

    function dragOverHandler(e) {
        e.preventDefault()

    }

    function dropHandler(e, item) {
        e.preventDefault()
        console.log('drop', item)
        setTodo(todo.map(c => {
            if (c.id === item.id) {
                return {...c, order: currentCard.order}
            } else if (c.id === currentCard.id) {
                return {...c, order: item.order}
            }
            return c
        }))
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

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
        console.log(todo)
    }

    console.log(todo)

    function changePlaces() {
        console.log('CHANGE PLACES')
        const editTodo = todo
        const element = editTodo.shift()
        editTodo.push(element)
        console.log("editTodo", editTodo)
        setCurrentCard(editTodo)
        console.log('setCurrenttodo', currentCard)
        return currentCard
    }

    return (
        <div>{
            todo.sort(sortCards).map(item => (

                    <div draggable={true}
                         onDragStart={(e) => dragStartHandler(e, item)}
                         onDragLeave={(e) => dragEndHandler(e)}
                         onDragEnd={(e) => dragEndHandler(e)}
                         onDragOver={(e) => dragOverHandler(e)}
                         onDrop={(e) => dropHandler(e, item)}
                         className={item.status === true ? 'item-active' : 'item-closed'} key={item.id}>
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
        }
            <button onClick={changePlaces}>CHANGE PLACES</button>
        </div>
    );
}

export default ToDo;