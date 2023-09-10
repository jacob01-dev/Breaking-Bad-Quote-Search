import { useState } from "react"
import './App.css'
import Header from './components/Header'
import QuoteList from './components/QuoteList'

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className='bg-gradient-to-br from-slate-950 to-slate-900'>
        <Header setInputValue={setInputValue}/>
        <QuoteList inputValue={inputValue}/>
    </div>
  )
}

export default App
