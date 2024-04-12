import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Obtenez des offres exclusive par mail</h1>
        <p>Inscrivez vous à notre newsletter et rester à jour sur nos nouvelle sortie</p>
        <div>
            <input type="email" placeholder='Entrez votre email ici'/>
            <button>S'inscrire</button>
        </div>
    </div>
  )
}
export default NewsLetter