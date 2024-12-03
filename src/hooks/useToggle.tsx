import { useState } from "react";

export default function useToggle () {
  const [showCounter, setShowCounter] = useState(true);

  const toggle = () => setShowCounter(show => !show);

  return {
    showCounter, 
    toggle
  };
}
