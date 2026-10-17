import Ladding from './pages/Ladding'
import { useEffect } from "react"
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        once: true,
        offset: 100,
      }
    )
  }, [])
  return (
    <Ladding/>
  )
}

export default App