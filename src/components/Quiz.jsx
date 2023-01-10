import React,{useState} from 'react'
import CorrectAlert from './CorrectAlert';
import Toast from 'react-bootstrap/Toast';
import Loader from './Loader';
import UseFetch from './UseFetch'
import WrongAlert from './WrongAlert';

const Quiz = () => {
  const [counter, setCounter] = useState(1);
  const [correct, setcorrect] = useState(false);
  const [score, setscore] = useState(false);
  const [correctCounter, setcorrectCounter] = useState(0);
  const [Result, setResult] = useState("Submit");
  const [wrong, setWrong] = useState(false);
  console.log(correct.correctCounter)
  console.log(counter);
    const [url, seturl] = useState('http://localhost:8000/Quiz/1');
        const {error, isPending, data: Quiz} = UseFetch(url);
    const HandleCheck = (e) => {
        e.preventDefault();
        var ele = document.getElementsByName('q1'); 
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                var a = ele[i].value;
                // console.log(Quiz.Correct);
                // console.log(a);
                setCounter(counter + 1);
                if ((a === Quiz.Correct) && (counter <= 10)) {
                  setcorrectCounter(correctCounter + 1);
                  setcorrect(true);
                 seturl(`http://localhost:8000/Quiz/${counter + 1}`)
                  setTimeout(()=>{
                   setcorrect(false)
                  },700);
                }
                else if ((a !== Quiz.Correct) && (counter <= 10)) {
                  setWrong(true);
                 seturl(`http://localhost:8000/Quiz/${counter + 1}`)
                  setTimeout(()=>{
                   setWrong(false)
                  },700);
                }
                else if (counter === 11){
                  setResult("result");
                  setscore(true)
                }
            }
        
    }
}
    console.log(Quiz);
  return (
    <>
    {isPending && <Loader/>}
    {correct && <CorrectAlert/>}
    {wrong && <WrongAlert/>}
    {score &&  <Toast>
      <Toast.Body ><strong className='bg-dark text-light'>Your Score is {correctCounter} out of 10</strong></Toast.Body>
      <button onClick={()=>setscore(false)}>close</button>
    </Toast>}
   {Quiz && <div className="container my-5">
    <div className="card">
   <div className="card-header bg-dark text-light">Total Number Of Question {Quiz.id} / 10</div>
   <div className="card-header bg-primary">{Quiz.Question}</div>
   <div className="card-body">
   <div>
    <form onSubmit={HandleCheck} >
   <div className="form-check my-3">
   <input className="form-check-input"
    type="radio"
     name="q1"
      id="q1_r1"
       value={Quiz.Answers1}/>
   <label className="form-check-label" htmlFor="q1_r1">
      {Quiz.Answers1}
   </label>
   </div>
   <div className="form-check my-3">
   <input className="form-check-input" type="radio" name="q1" id="q1_r1" value={Quiz.Answers2}/>
   <label className="form-check-label" htmlFor="q1_r1">
     {Quiz.Answers2}
   </label>
   </div>
   <div className="form-check my-3">
   <input className="form-check-input" type="radio" name="q1" id="q1_r1" value={Quiz.Answers3}/> 
   <label className="form-check-label" htmlFor="q1_r1">
      {Quiz.Answers3}
   </label><br />
   <button type="submit" className='btn sm-btn bg-success w-25 my-3'>{Result}</button>
   </div>
   </form>
   </div>  
   </div>
</div>
</div>}
    </> 
  )
}

export default Quiz
