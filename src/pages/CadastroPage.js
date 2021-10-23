import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import CadastroForm from '../components/CadastroForm';


export default function CadastroPage() {
    return (
        <main className='cadastraPageContainer'>
            <WelcomeCard title="Hey! Welcome" message="Sign up now and start using our platform!"/>
            <CadastroForm />
        </main>
    )
}
