
import './App.css';
import CadastroPage from './pages/CadastroPage'
import WelcomeCard from './components/WelcomeCard';
export default function App() {
  return (
    <div className="screenRegister"> 
      <WelcomeCard 
        title='Hey! Welcome.'
        message='Sign up now and start using our plataform!'/>
        <CadastroPage/>
       
      </div>
   
    
  );
}

