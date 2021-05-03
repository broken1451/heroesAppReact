import React from 'react'

const LoginScreen = ({history}) => {


    const login =()=>{
        console.log('click');
        // navegar hacia donde quemos al hacer click like router.nvigate de angular
        // history.push('/')
        history.replace('/') // reemplazar lo q no se visito en la historia
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button type="button" name="" id="" className="btn btn-primary" onClick={login}>Login</button>
        </div>
    )
}

export default LoginScreen
