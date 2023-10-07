import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function LikeZone() {
  // Datos del usuario
  const { user } = useContext(LoginContext)

 
  return (
    <button>Like</button>
  )
}
