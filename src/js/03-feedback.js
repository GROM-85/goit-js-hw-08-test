import { throttle } from "lodash";

const form = document.querySelector(".feedback-form");
const FORM_STATE_KEY = "feedback-form-state";
const {elements:{email,message}} = form;// for update values
const formData = {};




const saveMessageHandler = (event) =>{
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_STATE_KEY,JSON.stringify(formData));
   
}

function updateInput(){
    try{
        const serializedInputs = localStorage.getItem(FORM_STATE_KEY);
        const parsedInputs = JSON.parse(serializedInputs);
        console.log(parsedInputs);// return object
        email.value = parsedInputs.email;
        message.value = parsedInputs.message;
    }
    catch(error){
        console.log("Get error state",error.message);
    }
}

function formSubmitHandler(event){
    event.preventDefault();
    
    console.log(formData);
    localStorage.removeItem(FORM_STATE_KEY);
    event.currentTarget.reset();
}


updateInput()
form.addEventListener("input",throttle(saveMessageHandler,500)); 
// to use throttle with eventListener need to use "tartget" NOT currentTarget cause during bubbling target all the time the same!!
form.addEventListener("submit",formSubmitHandler);