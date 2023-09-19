import a from '../src/assets/a.webp'
import b from '../src/assets/b.webp'
import c from '../src/assets/c.webp'
import d from '../src/assets/d.webp'


function App() {
  return (
    <div className="App">

      <div className='flex flex-col gap-4 mx-auto'>
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

    </div>
  );
}

export default App;