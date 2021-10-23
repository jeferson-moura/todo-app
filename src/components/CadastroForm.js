import react from 'react'
import InputText from '../components/InputText'
import ConfirmButton from '../components/ConfirmButton'

export default function CadastroForm(props) {
    return (
        <div className="cadastroFormContainer">
            <h1>Create your account now!</h1>
            <span>Enter your details to register:</span>
            <InputText type="text" placeholder="Name" autoFocus="true"/>
            <InputText type="email" placeholder="Email"/>
            <InputText type="password" placeholder="Passoword"/>
            <ConfirmButton title="SIGN UP"/>
            <span>Already have an account? Click <a href='#'>here</a> to login.</span> 
        </div>
    )
}