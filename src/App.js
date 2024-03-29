import { useState } from 'react'
import { useApolloClient } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'

const App = () => {
  const [page, setPage] = useState('authors')
  const[token , setToken] = useState(null)
  const client = useApolloClient()
  
  const logout = () =>{
    setToken(null)
    localStorage.clear()
    client.resetStore()
    setPage('authors')
  }
  const loggedin = () =>{
    return(
      <>
      <button onClick={() => setPage('add')}>add book</button>
      <button onClick = {logout}>logout</button>
      </>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token? loggedin(): <button onClick={() => setPage('login')}>login</button>}
        
      </div>

      <Authors show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />
      <LoginForm setPage={setPage} setToken={setToken} show={page==='login'}/>
    </div>
  )
}

export default App
