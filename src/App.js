import './App.css';
import Header from "./components/header/Header";
import AddToDoList from "./components/add-to-do/AddToDoList";
import ToDo from "./components/to-do-list/ToDo";
import {useState} from "react";
import Slider from "./components/slider/Slider";


function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first todo',
            status: true
        },
        {
            id: 2,
            title: 'second todo',
            status: true
        },
        {
            id: 3,
            title: 'third todo',
            status: false
        }
    ])
    return (
        <div className="App">

            <Header/>
            <div className='main-location'>
                <div className='item'>
                    <AddToDoList todo={todo} setTodo={setTodo}/>
                    <ToDo todo={todo} setTodo={setTodo}/>
                </div>
                <div>
                    {/*<Slider/>*/}
                </div>
            </div>

        </div>
    );
}

export default App;
