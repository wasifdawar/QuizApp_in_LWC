import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement 
{   
    

    selected={} //for storing answers
    correctAnswer =0; //to show the correct Answer
    isSubmitted= false; //Use to show the result
     
    myQuestions = 
    [
      {
        id:"Question1",
        question: "Which one of the following is not the template loop?",
        answer:
        {
         a:"foreach",
         b:"iterator",
         c:"map Loop"
        },
        correctAnswer:"c"
    },
    {
        id:"Question2",
        question: "Which one of the file is invalid in LWC?",
        answer:
        {
         a:".svg",
         b:".apex",
         c:".js"
        },
        correctAnswer:"b"
    },
    {
        id:"Question3",
        question: "Which of the following is not a directive?",
        answer:
        {
         a:"for:each",
         b:"iterator",
         c:"@track"
        },
        correctAnswer:"c"
    }
    ]
    //used for disable submit button
    get allNotSelected()
    {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    //chnage handler called on every click
    changeHandler(event)
    {
        
        const{name,value} = event.target;

        this.selected = {...this.selected, [name]:value};       
    }

    //form reset handler
    resetHandler(event)
    {
      this.selected={};
      this.correctAnswer=0;  
      this.isSubmitted=false;
    }
    
    //form submit handler
    submitHandler(event)
    {
        event.preventDefault();
        //this.selected = {"Question1":"b","Question2":"c","Question3":"a"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer) ;
        this.correctAnswer = correct.length;
        this.isSubmitted =true;
        
    }

    //for applying dynamic styling to our result 
    get isScoredFull()
    { 
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswer?
            'slds-text-color_success':'slds-text-color_error'}`
    }
}