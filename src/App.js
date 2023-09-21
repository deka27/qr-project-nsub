import a from '../src/assets/a.webp'
import b from '../src/assets/b.webp'
import c from '../src/assets/c.webp'
import d from '../src/assets/d.webp'


function App() {
  return (
    <div className="App bg-gradient-to-tr from-slate-300 via-gray-400 to-blue-500">

      <div className='h-2 '></div>

      <div className='flex flex-col gap-2 mx-auto'>
        <div className='side_1 mx-auto'>
          <img src={a} alt='a'></img>
        </div>
        <div className='side_2 mx-auto'>
          <img src={b} alt='b'></img>
        </div>
        <div className='side_3 mx-auto'>
          <img src={c} alt='c'></img>
        </div>
        <div className='side_4 mx-auto'>
          <img src={d} alt='d'></img>
        </div>
      </div>
      <div className='mx-auto bg-black h-16 flex justify-center items-center'>
        <div className='text-center text-base text-white'>⚡Powered by <span className='font-semibold text-rose-400'>Modubix</span>⚡</div>
      </div>

    </div>
  );
}

export default App;