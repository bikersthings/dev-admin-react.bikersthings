import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginStore } from "../zustand"
import useToken from "../hooks/useToken"


export default () => {
    const navigate = useNavigate()
    const token = useToken()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { user, login } = useLoginStore()

    const onSubmit = async (e?: any) => {
        e.preventDefault()
        try {
            // lfuad1223@gmail.com
            // 23sendok
            const response = await login('lfuad1223@gmail.com', '23sendok')
            if (response) {
                token.setToken(response.token)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="login-section">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-auto p-0">
                        <div className="left">
                            <img width={'100%'} src="https://dev.bikersthings.com/assets/img/background/auth-bg.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-auto min-h-100 p-5 ">
                        <div className="logo mb-5 text-center">
                            <img src="https://dev.bikersthings.com/assets/img/logo/icon.png" alt="" />
                            Where <b>BIKERS</b> meet
                        </div>
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
        </>
    )
}