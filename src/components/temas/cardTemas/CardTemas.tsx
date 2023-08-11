import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-gradient-to-r from-gray-900 via-sky-800 to-gray-700 shadow-md text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-sky-100 h-full'>{tema.descricao}</p>
      <div className="flex">

        <Link to={`/editarTema/${tema.id}`} className='w-full text-white bg-sky-900 hover:bg-blue-500 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarTema/${tema.id}`} className='text-white bg-red-800 hover:bg-red-500 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas