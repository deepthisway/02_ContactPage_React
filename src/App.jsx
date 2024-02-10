import './App.css'
import ContactUs from './Components/ContactUs/ContactUs'
import Navbar from './Components/Navigation/Navbar'
import Contactform from './Components/contactform/contactform'

function App() {

  return (
    <>
     <Navbar/>
     <main className='main_container'>
     <ContactUs/>
     <Contactform/>
     </main>
    </>
  )
}

export default App
