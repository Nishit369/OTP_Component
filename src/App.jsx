import { useEffect, useRef, useState } from "react";

const OTP_DIGITS = 5;

function App() {

  const [ipArr, setIpArr] = useState(new Array(OTP_DIGITS).fill(""));
  const refArr = useRef([]);

  useEffect(()=>{
    refArr.current[0]?.focus();
  },[])

  const handleOnKeyDown=(event,index)=>{
    if(!event.target.value && event.key=="Backspace")
    {
      refArr.current[index-1].focus();
    }
  }

  const handleOnChange = (value, index)=>{
    if(isNaN(value)) return;
    // console.log(value)
    const newVal = value.trim();
    const newArr = [...ipArr]
    newArr[index] = newVal.slice(-1)
    setIpArr(newArr)
    newVal && refArr.current[index+1]?.focus();
  }
  // console.log(ipArr)

  return (
    <>
     <h1 className="text-2xl text-white font-bold text-center mb-4">OTP component</h1>
     {ipArr.map((input, index)=>{
      return <input className="border-2 text-white caret-white bg-black rounded-sm text-center p-1.5 m-0.5 w-10 border-gray-800" 
      key={index} 
      type="text" 
      value={ipArr[index]}
      ref={(input)=>refArr.current[index]=input}
      onChange={(e) => handleOnChange(e.target.value, index)}
      onKeyDown={(e)=> handleOnKeyDown(e, index)}
      />
     })}
    </>
  )
}

export default App
