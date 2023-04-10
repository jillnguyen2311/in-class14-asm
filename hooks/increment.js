import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    function add() {
        setCounter(counter + 1);
    }

    function minus() {
        setCounter(counter - 1);
    }

    return {counter, add, minus}
}

export default useCounter;