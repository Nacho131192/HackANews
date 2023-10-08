import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Button from 'react-bootstrap/Button';

export default function LikeZone() {
  // Datos del usuario
  const { user } = useContext(LoginContext)

 
  return (
    <Button  variant="secondary">LIKE</Button>
  
  )
}
