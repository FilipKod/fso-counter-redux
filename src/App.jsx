import { useState } from 'react'
import Button from './Button'
import Display from './Display'

function App() {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  const resetToZero = () => {
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />

      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={resetToZero} text="zero" />
    </div>
  )
}

export default App
