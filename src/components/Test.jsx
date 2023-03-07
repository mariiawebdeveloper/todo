import React, {useState} from 'react';
import '../App.css'

function Test() {
    const [cardList, setCardList] = useState([
        {
            id: 2,
            order: 2,
            title: 'second todo',
        },
        {
            id: 1,
            order: 1,
            title: 'first todo',
        },

        {
            id: 3,
            order: 3,
            title: 'third todo',
        }
    ])
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, card) {
        setCurrentCard(card)
    }

    function dragEndHandler(e) {
        e.target.style.background = 'white'

    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgrey'

    }

    function dropHandler(e, card) {
        e.preventDefault()
        setCardList(cardList.map(c => {
            if (c.id === card.id) {
                return {...c, order: currentCard.order}
            } else if (c.id === currentCard.id) {
                return {...c, order: card.order}
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
    return (
        <div className={"map"}>
            {cardList.sort(sortCards).map(card => (

                <div
                    draggable={true}
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, card)}
                    className={'card'}>{card.title}</div>
            ))}

        </div>
    );

}

export default Test;