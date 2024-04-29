import ListaTemas from '../../components/temas/listaTemas/ListaTemas';

function Home() {
 

  return (
    <div className='flex justify-center items-center'>
      <div>
        {/* <h2 className="text-slate-900 text-5xl  my-4">Logar</h2>
        <h2 className="text-slate-900 text-4xl ">Ola user : {nome}</h2> */}
        <ListaTemas/>
      
      </div>

    </div>
  );
}

export default Home;