import './App.css';
import Nav  from './components/Nav';
import Foot from './components/Foot';
import Store from './components/Store';
import Classcom from './components/Classcom';
import Funcom from './components/Funcom';
import Hw from './components/Hw';
import { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import {Routes , Route, Router} from 'react-router-dom';
import { Course } from './components/Course'
import Rou from './components/Rou';


  
function App() {	
	const [name, setTitle] = useState("");
	const result = Course.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
	
	return (
<div className="App">
  <Routes>
<Route exact path='/' element={<Hw></Hw>}></Route>
</Routes>
  <Nav></Nav>

<Input placeholder='Search ...' backgroundColor={'white'} mb={10} w={400} borderRadius={15} onChange={(e)=> setTitle(e.target.value)}/>
 
  <div className='grid-container'>
<div className='cards-container'>
{result.map((item) => (
  <Store coruseimg={item.coruseimg} name={item.name} date={item.date} />
  ))}

 </div>
 </div>
 </div>
  );
}

export default App;




{/* <div className='c1'>

    <Store name ="دورة تجربة المستخدم" date="4 Nov-30 Nov" aval="4" coruseimg="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/UX.jpg"/>
    <Store  name=" معسكر تطوير المواقع" date="15 Nov-20 Nov" aval=" 15" coruseimg="https://www.trio.dev/hubfs/Imported_Blog_Media/263a75529a1752b75d64f9f21fd07c92-3-2.jpg"/>
    <Store  name="معسكر بايثون" date="1 Nov-30 Nov" aval=" 1" coruseimg="https://ih1.redbubble.net/image.523099154.3559/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg"/>
    <Store  name="دورة جافا" date="27 Nov-30 Nov" aval="27" coruseimg="https://cdn.arageek.com/magazine/2021/04/encyclopedia-%D9%85%D8%A7-%D9%87%D9%8A-%D8%B9%D9%8A%D9%88%D8%A8-%D9%84%D8%BA%D8%A9-%D8%AC%D8%A7%D9%81%D8%A7.jpg"/>
    <Store  name="معسكر أمن سيبراني" date=" 30 Oct-30 Nov" aval="30" coruseimg="https://albilad.s3.me-south-1.amazonaws.com/images/news/2021/02/21/f21164558.jpg"/>
    <Store  name="معسكر علم البيانات" date="1 Nov-13 Nov"aval="1" coruseimg="https://pbs.twimg.com/media/DPwBYdHWAAIWnNT.jpg" />
    </div> */}