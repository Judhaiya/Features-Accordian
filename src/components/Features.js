import React,{useState} from 'react'
import {FaAngleDown,FaWindowClose} from 'react-icons/fa'

export default function Features({Title,infoOne,infoTwo}) {
  const [show,setShow]=useState(false)
  
    return(
        <section className="particulars">
            <header className="parHeader">
                <div className="flex">
                <span className="title">{Title}</span><button className={`btn ${show?"wClose":"angle"}`} onClick={()=>{setShow(!show)}}>
                    {show?<FaWindowClose/>:<FaAngleDown/>}
                </button>
                </div>
                <div className="border"></div>
               
                {show? <div className="bottom-spacing">
                   <p className="info"> <input type="checkbox"/>{infoOne}</p>
                   <div className="border"></div>
                   <p className="info"><input type="checkbox"/>{infoTwo}</p>
                   
                </div>:""}
            </header>
          

        </section>
    )
                
}
