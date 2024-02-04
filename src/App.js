import { useState } from "react";
import Counter from "./components/Counter";
import './style.css'

function App() {
  const [items, setItems] = useState([
    {
      count : 0,
      id : 1
    },
    {
      count : 0,
      id : 2
    },
    {
      count : 0,
      id : 3
    }
  ])

  const [nextId, setNextId] = useState(4)

  const addAll = () => {
    setItems(prevItems => prevItems.map(item => {
      return {
        count : item.count + 1,
        id : item.id
      }
    }))
  }

  const addOne = (id) => {
    setItems(prevItems => prevItems.map(item => {
      if(item.id === id){
        return {
          count : item.count + 1,
          id : item.id
        }
      }
      return item
    }))
  }

  const addItem = () => {
    setItems(prevItems => [
      ...prevItems,
      {
        count : 0,
        id : nextId
      }
    ])
    setNextId(prevId => prevId + 1)
  }

  return (
    <div className="counterList">
      <button onClick={() => addAll()}>All + 1</button>
      {items.map(item =>
        <Counter 
          count={item.count}
          addOne={addOne}
          id={item.id}
          key={item.id}
        />
      )}
      <button onClick={() => addItem()}>Add a Counter</button>
    </div>
  );
}

export default App;
