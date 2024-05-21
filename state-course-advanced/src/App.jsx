import { useState } from 'react'
import Input from './components/Input'
import Display from './components/Display'

function App() {
  const [inputText, setInputText] = useState('')

  const handleChange = (e) => {
    setInputText(e.target.value)
  };
  
  return (
    <>
      <Input value={inputText} onHandleChange={handleChange}  />
      <Display text={inputText} />
    </>
  )
}

export default App
