
import { useState } from "react";

const UseStateHistory = () => {
  const [history, setHistory] = useState([])

  const addHistory = (value = '_') => {
    setHistory(((current) => [...current, value]))
  }

  const deleteHistory = (index) => {
    setHistory((current) => {
      current.splice(index, 1)
      return [...current]
    })
  }

  return { history, addHistory, deleteHistory }

}

const App = () => {
  const [name, setName] = useState('')
  const [isNameReversed, setIsnameReversed] = useState(false)
  const { history, addHistory, deleteHistory } = UseStateHistory()
  console.log("first1", history)

  const handleChange = (event) => {
    setName(event.target.value)
    addHistory(event.target.value)
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        checked={isNameReversed}
        onChange={(event) => setIsnameReversed(event.target.checked)}
      />
      <Name name={name} isNameReversed={isNameReversed} />
      <ul>
        {history.map((name, i) => (
          <li key={i} onClick={deleteHistory}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

const Name = ({name, isNameReversed}) => {
  if(!name){
    return <p>write your name</p>
  }

  const ComputedName = isNameReversed
    ? name.split('').reverse().join('')
    : name

  return (
    <p>
      Hello {ComputedName}
    </p>
  )
}
