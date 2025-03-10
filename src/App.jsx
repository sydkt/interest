
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,ssetYear] = useState(0)
  const [invalidPrinciple,setInvalidPrinciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)
  

  const validateInputs  = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name,value);
    console.log(!!value.match(/^[0,9]*.?[0,9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }

    } if(name=="rate"){
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
      
    } if(name=="year"){
      ssetYear(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
      
    }
    
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log("inside handleCalculate");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("please fill the form completly")
    }
    
  }
  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    ssetYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }
  

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark' >
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>simple interest App</h3>
      <p>Calculate your simple interest Easly</p>
      <div className='bg-warning p-3 text-light text-center rounded'>
        <h1> ₹ {interest} </h1>
        <p className='fw-bolder'>Total simple interest</p>
      </div>
      <form className="mt-5">
        {/* {/principle/} */}
      <div className='mb-3'>
      <TextField value={principle || ""} name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="₹ principle Amount" variant="outlined" />
      </div>
     { invalidPrinciple &&
      <div className='mb-3 text-danger fw-bolder'>
      !!Invalid principle Amount
     </div>
     }
      {/* {/Rate/} */}
      <div className='mb-3'>
      <TextField value={rate || ""} name='rate' onChange={(e)=>validateInputs(e.target)}  className='w-100' id="outlined-rate" label="Rate of interest(%) " variant="outlined" />
      </div>
      { invalidRate &&
      <div className='mb-3 text-danger fw-bolder'>
      !!Invalid rate 
     </div>
     }
      {/* {/Year/} */}
      <div className='mb-3'>
      <TextField value={year || ""} name='year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-Year" label="Time period (Y)" variant="outlined" />
      </div>
      { invalidYear &&
      <div className='mb-3 text-danger fw-bolder'>
      !!Invalid year
     </div>
     }
      <Stack direction="row" spacing={2}>
      <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
      <Button onClick={handleReset} style={{width:'50%',height:'70px'}}className='border border-dark text-dark' variant="outlined">Reset</Button>
      </Stack>
      </form>
      </div>
      
    </div>
  )
}

export default App
