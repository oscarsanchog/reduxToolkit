import { useDispatch, useSelector } from "react-redux"
import { getCharsById } from "../redux/characterActions"
import { useEffect } from "react"

const Detail = () => {
    const dispatch = useDispatch()
    const { detail } = useSelector(state => state.characters)

    useEffect(() => {
        dispatch(getCharsById(1))
    }, [dispatch])
    
  return (
    <div>
        {
            Object.keys(detail).length > 0 && <span>{detail.nae}</span>
        }
    </div>
  )
}

export default Detail