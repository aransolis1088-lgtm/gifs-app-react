import { useState } from "react";



const useCounter = (initialValue: number = 5) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => setCounter(prev => prev + 1);
    const handleSubtract = () => setCounter(prev => prev - 1);
    const handleReset = () => setCounter(initialValue);
    return { counter, handleAdd, handleSubtract, handleReset }
}

export default useCounter
