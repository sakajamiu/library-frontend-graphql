import { useEffect ,useState } from "react";
import { LOGIN } from "../queries";
import { useMutation } from "@apollo/client";

const LoginForm = ({ show,setPage,setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    
    const [login,result] = useMutation(LOGIN)
   

    useEffect(() =>{
        if(result.data){
            const token = result.data.login.value
            setToken(token)
            console.log(token)
            localStorage.setItem('library-token', token)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[result.data])
  

    const submit = async(event) => {
        event.preventDefault()
        login({variables:{username, password}})
        setUsername('')
        setPassword('')
        setPage('authors')
        

    }
    if(!show){
        return null
    }
    return(
        <div>
            <form onSubmit={submit}>
                <div>
                    username <input
                        value={username}
                        onChange={({target}) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password <input
                        type='password'
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default LoginForm