import { FC, useState, useEffect } from 'react'

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("creado");
  
    return () => {
      console.log("desmontado")
    }
  }, []);

  useEffect(() => {
    console.log("cambio de valor");
  }, [count]);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default Counter;
