import './App.css';
import Header from "./components/header/Header";
import AddToDoList from "./components/add-to-do/AddToDoList";
import ToDo from "./components/to-do-list/ToDo";
import {useState} from "react";


function App() {
    const [todo, setTodo] = useState([
        {
            id: 2,
            order: 1,
            title: 'second todo',
            status: true
        },
        {
            id: 1,
            order: 0,
            title: 'first todo',
            status: true
        },

        {
            id: 3,
            order: 2,
            title: 'third todo',
            status: false
        }
    ])
    const [currentCard, setCurrentCard] = useState(null)


    return (
        <div className="App">

            <Header/>
            <div className='main-location'>
                <div className='item'>
                    <AddToDoList todo={todo} setTodo={setTodo}/>
                    <ToDo todo={todo} setTodo={setTodo} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
                </div>

            </div>

        </div>
    );
}

export default App;
