import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'

function Hw () {

const [input, setInput] = useState({
    username: '',
    password: '',
    // confirmPassword: ''
    });

    const [error, setError] = useState({
    username: '',
    password: '',
    // confirmPassword: ''
    })




  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

    //   const handleSubmit = event => {
    //     event.preventDefault();
    //     alert(`username: ${username} & Password: ${password}`);
    //   };
 
    
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = " Enter your Username.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
 
  return (
    
    <div className="Login">
      <h4>Log</h4>
      <form>
      
 
        <Input
          type="text"
          name="username"
          placeholder='Username'
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}></Input>
        {error.username && <span className='err'>{error.username}</span>}
 
        <Input
        type="password"
        name="password"
        placeholder='Password'
        value={input.password}
        onChange={onInputChange}
        onBlur={validateInput}></Input>
        {error.password && <span className='err'>{error.password}</span>}
 
        <Button onClick>Login</Button>
        </form>
    </div>
  );

  }
export default Hw