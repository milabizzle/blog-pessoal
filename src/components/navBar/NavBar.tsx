import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='bg-gradient-to-r from-cyan-600 to-blue-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='font-bold hover:font-serif'>Postagens</Link>
              <Link to='/temas' className='font-bold hover:font-serif'>Temas</Link>
              <Link to='/cadastroTema' className='font-bold hover:font-serif'>Cadastrar tema</Link>
              <Link to='/perfil' className='font-bold hover:font-serif'>Perfil</Link>
              <Link to='' onClick={logout} className='font-bold hover:font-serif'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar