import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inscription</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Votre Nom' />
          <input type="email" placeholder='Votre Email' />
          <input type="password" placeholder='Votre Mot de Passe' />
        </div>
        <button>
          S'inscrire
        </button>
        <p className="loginsignup-login">J'ai déjà un compte <span>Me connecter</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>En cochant, j'accepte les thermes du contrat</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;