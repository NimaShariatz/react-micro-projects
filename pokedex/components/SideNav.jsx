import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../src/utils"


export default function SideNav(props){
    const {selectedPokemon, setSelectedPokemon} = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((pokemonName, eleIndex) => {
        
        //if poke *NUMBER* includes current search value...
        if ((getFullPokedexNumber(eleIndex)).includes(searchValue) ){
            return true
        }

        //if poke name includes current search value...
        if(pokemonName.toLowerCase().includes(searchValue.toLowerCase())){
            return true
        }

        //else return false
        return false

    })

    return(
        <nav>
            
        <div className={"header"}>
            <h1 className="text-gradient">Pokedex</h1>
        </div>
        <input placeholder="001 or Bulba..." value={searchValue} onChange={ (e) => { setSearchValue(e.target.value) }} />

        {filteredPokemon.map((pokemon, pokemonIndex) => {
            const truePokedexNumber = first151Pokemon.indexOf(pokemon)

            return(
                    <button key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? ' nav-card-selected ' : '  ')} onClick={() => {setSelectedPokemon(truePokedexNumber)}}>
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}

        </nav>
    )
}