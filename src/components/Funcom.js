import React , {useState} from 'react'
import { Button } from '@chakra-ui/react'


export default function Funcom() {
    const [sum, setSum]=useState()
    const [mines, setMines]=useState()
    const [mul, setMUl]=useState()
    const [div, setDiv]=useState()

    const sumf=()=> {
console.log("setcounter");
setSum()
    }
   

  return (
    <div>
        <Button onClick ={dec}>click me</Button>
        <p>counter:{counter}</p>

        
    </div>
  )
}
