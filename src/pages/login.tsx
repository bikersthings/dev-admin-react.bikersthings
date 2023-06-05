import { useState } from "react"
import { useUserStore } from "../zustand"
import { useNavigate } from "react-router-dom"


export default () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const user = useUserStore((state) => state.setUser)

    const onSubmit = (e?: any) => {
        e.preventDefault()
        user()
        localStorage.setItem('isLogin', 'true')

        const isLoggedIn = localStorage.getItem('isLogin')

        if (isLoggedIn === 'true') {
            console.log(isLoggedIn)
            navigate({ pathname: '/' })
        }
    }

    return (
        <>
            <div className="min-vh-100 d-flex flex-row justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card card-primary shadow-lg">
                                <div className="card-body">
                                    <h1 className="text-center">Bikersthings</h1>
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="">Username or email</label>
                                            <input className="form-control" value={username} type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="">Password</label>
                                            <input className="form-control" value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}