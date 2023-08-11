import homeLogo from '../../assets/img/Cobra-Kai-Logo.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-gray-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold drop-shadow-lg'>Seja bem vinde!</h2>
              <p className='text-xl drop-shadow-lg'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded shadow-lg shadow-indigo-500/40 bg-white text-blue-900 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
            <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
              <img src={homeLogo} alt="logo do dojo Cobra-Kai" className='border-x-indigo-700 w-2/3' />
              </div>
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;