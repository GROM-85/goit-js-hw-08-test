import { throttle } from "lodash";

const form = document.querySelector(".feedback-form");
const FORM_STATE_KEY = "feedback-form-state";
const {elements:{email,message}} = form;// for update values





const saveMessageHandler = (event) =>{

    let retrivedData = localStorage.getItem(FORM_STATE_KEY);
    retrivedData = JSON.parse(retrivedData) || {};
    retrivedData[event.target.name] = event.target.value;

    console.log(retrivedData);
    
    localStorage.setItem(FORM_STATE_KEY,JSON.stringify(retrivedData));
   
}

function updateInput(){
    try{
        const serializedInputs = localStorage.getItem(FORM_STATE_KEY);
        const retrivedData = JSON.parse(serializedInputs);
        console.log(retrivedData);// return object
        email.value = retrivedData.email || "";
        message.value = retrivedData.message || "";
    }
    catch(error){
        console.log("Get error state",error.message);
    }
}

function formSubmitHandler(event){
    event.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(FORM_STATE_KEY)));
    localStorage.removeItem(FORM_STATE_KEY);
    event.currentTarget.reset();
}


updateInput()
form.addEventListener("input",throttle(saveMessageHandler,500)); 
// to use throttle with eventListener need to use "tartget" NOT currentTarget cause during bubbling target all the time the same!!
form.addEventListener("submit",formSubmitHandler);