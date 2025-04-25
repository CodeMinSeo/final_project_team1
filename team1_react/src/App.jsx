import { FaBeer } from '@react-icons/all-files/fa/FaBeer.js';
import Example from './components/kms/Example.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {

  return (
    <>
      <Header />

      <br/><br/><br/>

      <div className={'container mt-5'}>
        <h1>Bootstrap Test</h1>
        <button className={'btn btn-primary'}>Bootstrap</button>
      </div>

      <hr/>

      <div className={'container mt-5'}>
        <h1>React-Icon Test</h1>
        <h1><FaBeer /></h1>
      </div>

      <hr/>

      <div className={'container mt-5'}>
        <h1>Tailwindcss Test</h1>
        <p className={'text-5xl font-bold underline'}>tailwind</p>
      </div>

      <br/><br/><br/>

      <Footer />
    </>

  )
}

export default App
