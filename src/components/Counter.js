import React from 'react'
import {useState,useEffect}  from 'react'

function Counter() {
    const [number,setNumber] = useState(0);
  const [ name,setName] = useState("Ayse")
  useEffect(()=>{
    console.log('Component mount edildi')

    // bu component unmount edildiginde bu setIntervalı durdurmamız gerekmektedir.
   const interval= setInterval(()=> {
        setNumber((n)=> n +1)
    },1000);

    return () => clearInterval(interval);//console.log("Component unmount edildi");// UNMOUNT OLDUGUNDA NE YAPACAGIMIZI BİLDİRİRİZ
  },[])
  useEffect(()=> {
    console.log("Number state i güncellendi")
  },[number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number +1) }>Click</button>
           
        </div>
    )
}

export default Counter

//Not:Eger useEffect deki array bos olursa; mount olma anındaki durumunu yakalamak istediğmizi belirtmis oluyoruz
// USEEFFECT ile; mount,state degişimi ve unmount anlarını useeffect ile yakalayabiliyoruz.