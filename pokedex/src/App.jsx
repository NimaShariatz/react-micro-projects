import  Header  from '../components/Header'
import  SideNav  from '../components/SideNav'
import PokeCard from '../components/PokeCard'

import { useState } from 'react'


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0); //default is bulbasaur

  const [showSideMenu, setShowSideMenu] = useState(false); //FOR TOGGLING MOBILE!
  /*-----------I STOPPED AT 4:28:00!!! */

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }


  
  return (
    <>

      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} handleToggleMenu={handleToggleMenu}/>
      <PokeCard selectedPokemon={selectedPokemon} />
      


    </>
  )
}

export default App
