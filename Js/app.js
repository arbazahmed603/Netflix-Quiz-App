
const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");

let questionCounter=0;
let currentQuestion;
let availableQuesion=[];
let availableOption=[];


//push "Questions" into avaiableQuesion Array (let availableQuesion=[];)
function setAvailableQuesion(){
    const totalQuesion=quiz.length
    for(let i=0 ;i<totalQuesion ;i++)
   availableQuesion.push(quiz[i]);
}
//set question Number , question and  options
function getNewQuestion(){
    //set question Number
  questionNumber.innerHTML= "Question " + (questionCounter + 1) + " of " + quiz.length;
  const questionIndex=availableQuesion[Math.floor(Math.random() * availableQuesion.length)]
  currentQuestion=questionIndex;
  questionText.innerHTML=currentQuestion.q
  
  //Get position of questionIndex from the avai;ableQuestion array
  const index1=availableQuesion.indexOf(questionIndex);
  //remove question Index
  availableQuesion.splice(index1,1)
 
  // set options
  //get the length of options
   const optionLen=currentQuestion.option.length
   //push option into availableOption Array 
   for(let i=0; i<optionLen; i++)
   availableOption.push(i)

   //create Option in Html
   for(let i=0; i<optionLen; i++){
     //Random Options
     const optonIndex= availableOption[Math.floor(Math.random() * availableOption.length)]
     //positio of option index
     const index2= availableOption.indexOf(optonIndex);
     availableOption.splice(index2,1);
     
     const options= document.createElement("div");
     options.innerHTML=currentQuestion.option[optonIndex]
     options.id=optonIndex;
     options.className="options";
     optionContainer.appendChild(options)
     options.setAttribute("onclick","getResult(this)"); 
   }

  questionCounter++
   
}

//Result of curent attempt Question
function getResult(element){
  const id = parseInt (element.id);
  if (id===currentQuestion.answer){
    //Setting color Green on Correct
    element.classList.add("correct");
  }
  else{
    console.log("Answer is Wrong");
  }
}

function next(){
  if(questionCounter===quiz.length){
    console.log("Quiz Over")
  }
  else{
    getNewQuestion();
  }
}



window.onload=function(){
    setAvailableQuesion() ;
    getNewQuestion();
}

