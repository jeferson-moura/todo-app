import React from 'react';

export default function CadastroPage(){
    return(
    <main className='registerUser'>
        
        <h1>Create your account now!</h1>
        <span>Enter your datails for register:</span>
        <input type='text' placeholder='Name'></input>
        <input type='mail'  placeholder='Mail'></input>
        <input type='password'  placeholder='Password'></input>
        <button>SINGN UP</button>
        <span>Already have an account? Click <a href='#'>here</a> to login.</span>
    </main>
    )
}
