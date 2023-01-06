import { useState, useEffect } from 'react'
import './App.css'

export function App() {
  const [name, setname] = useState('emauel');
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const [data, setData] = useState('')


  // console.log(name);  
  useEffect(() => {
    if (text2)
    console.log('antes');
    fetch(`http://api.github.com/users/${text2}`)
      .then(response => response.json())
      .then((data) => setData(data))
    console.log('depois');
  },[text2])
  return (
    <div className='container'>
      <h1>Class Hooks</h1>
      <p>Nome: {name}</p>
      <p>Numero: {count}</p>
      <button onClick={() => {
        setCount(count + 1)
        console.log(count)}}>Contar</button>


        <form action="">
          <p>Palavra:{text}</p>
          <p>Palavra:{text2}</p>

          <input type="text" onChange={(event) => setText(event.target.value)}/>
          <button onClick={(event) =>{
            event.preventDefault()
            setText2(text)
          }}>Enviar</button>

        </form>
          <section>
            <h2>{data.name}</h2>
            <img src= {data.avatar_url} alt="" />
            <p>{data.bio}</p>
          </section>

      
    </div>
   
  )
}

 
