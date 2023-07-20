import { useState } from "react"

const useForm = (initialState) => {
    
    const [form, setForm] = useState(initialState)
    
    const handleInput = (event) => {
        const {id, value} = event.target
        setForm({...form, [id]: value})
    }

    const clearFields = () => {
        setForm(initialState)
    }

    return {form, handleInput, clearFields}
}

export default useForm