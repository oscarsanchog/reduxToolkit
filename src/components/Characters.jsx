import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChars } from '../redux/characterActions'

export const Characters = () => {
    const dispatch = useDispatch()
    const { characters } = useSelector(state => state.characters)

    useEffect(() => {
        dispatch(getChars())
    }, [dispatch])
    
  return (
    <div>
        {characters?.map((character, i)=> {
            return(
                <div key={i}> 
                    <p>{character.name}</p>
                    <img src={character.image} alt={character.name} />
                </div>
            )
        })}
    </div>
  )
}
