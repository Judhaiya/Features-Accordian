import React,{useState} from "react";
import './App.css';
import Features from "./components/Features";

function App() {
  const [questions, setQuestions]=useState(Revws);
  return (
    <main className="main">
      <div className="container">
        Sort By
      </div>
      <section className="infoSec">
        {questions.map((question)=>{
          return(
            <Features key = {question.id} Title={question.Title} infoOne={question.infoOne} infoTwo={question.infoTwo}/>
          )
        })}
      </section>
    </main>
  )
}
const Revws = [
  {
    id:1,
    Title:" Food Category",
    infoOne:"Desserts",
    infoTwo:"Meals"
  },
  {
    id:2,
    Title:"Price",
    infoOne:"200-500",
    infoTwo:"500-1000"
  },
  {
    id:3,
    Title:"Discount",
    infoOne:"20% and above",
    infoTwo:"50% (special Tuesday Discount)"
  }
]
export default App;
