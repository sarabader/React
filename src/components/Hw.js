
import { Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

// import React, { useState } from 'react'
// import { Button, Input,Box , Grid, GridItem} from '@chakra-ui/react'

// function Hw () {
    
    
// const [input, setInput] = useState({
//     username: '',
//     password: '',
//     // confirmPassword: ''
//     });

//     const [error, setError] = useState({
//     username: '',
//     password: '',
//     // confirmPassword: ''
//     })




//   const onInputChange = e => {
//     const { name, value } = e.target;
//     setInput(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     validateInput(e);
//   }
 
 
//   const validateInput = e => {
//     let { name, value } = e.target;
//     setError(prev => {
//       const stateObj = { ...prev, [name]: "" };

//     //   const handleSubmit = event => {
//     //     event.preventDefault();
//     //     alert(`username: ${username} & Password: ${password}`);
//     //   };
 
    
//       switch (name) {
//         case "username":
//           if (!value) {
//             stateObj[name] = " Enter your Username.";
//           }
//           break;
 
//         case "password":
//           if (!value) {
//             stateObj[name] = "Please enter Password.";
//           } else if (input.confirmPassword && value !== input.confirmPassword) {
//             stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
//           } else {
//             stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
//           }
//           break;
 
//         case "confirmPassword":
//           if (!value) {
//             stateObj[name] = "Please enter Confirm Password.";
//           } else if (input.password && value !== input.password) {
//             stateObj[name] = "Password and Confirm Password does not match.";
//           }
//           break;
 
//         default:
//           break;
//       }
 
//       return stateObj;
//     });
//   }
 
//   return (
    
//     <div className="Login">
//       <h4>Log</h4>
//       <form>
      
 
//         <Input
//           type="text"
//           name="username"
//           placeholder='Username'
//           value={input.username}
//           onChange={onInputChange}
//           onBlur={validateInput}></Input>
//         {error.username && <span className='err'>{error.username}</span>}
 
//         <Input
//         type="password"
//         name="password"
//         placeholder='Password'
//         value={input.password}
//         onChange={onInputChange}
//         onBlur={validateInput}></Input>
//         {error.password && <span className='err'>{error.password}</span>}
 
//         <Button onClick>Login</Button>
//         </form>
// {/* 
//        <Box  display='flex' alignItems='center' mt={7} color='black' bg='gray' >HELLO </Box>
       
//        <br/><Grid templateColumns='repeat(5, 1fr)' gap={6}>
//   <GridItem w='100%' h='3 00' backgroundImage='https://pbs.twimg.com/media/DPwBYdHWAAIWnNT.jpg'/>
//   <GridItem w='100%' h='90' bg='blue.500' />
//   <GridItem w='100%' h='20' bg='blue.500' />
//   <GridItem w='100%' h='20' bg='blue.500' />
//   <GridItem w='100%' h='20' bg='blue.500' />
// </Grid> */}
//     </div>
//   );

//   }

// export default Hw




function Hw() {
// const userIsInactive = useFakeInactiveUser();
const navigate = useNavigate();
const [names, setNames] = useState ({fName:"", lName:""})
const LogIn = () =>{
if (names. fName. length=="" & names. lName. length=="" ){
alert ("Required")
}
else{
navigate("/Course")
}}
return (
<div>
<Input w={40} m={3} value={names. fName} onChange={e => {setNames ({...names, fName: e. target.value})}}></Input>
<Input w={40} m={3} value={names. lName} onChange={e => {setNames ({...names, lName: e.target.value})}}></Input>
<Button m={3} onClick={LogIn} > submit</Button>
<Text>{names. fName}</Text>
<Text>{names. lName}</Text>
</div>
)
}
export default Hw