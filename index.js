window.onload=createForm()


function createForm(){
  createSection('Profile', [
    {'First Name':'radio', options: ['Yes', 'No']},
    {'Last Name':'radio', options: ['Yes', 'No']},
    {'Middle Name':'radio', options: ['Yes', 'No']},
    {'Birth Date':'radio', options: ['Yes', 'No']},
    {'Gender':'radio', options: ['Yes', 'No']},
    {'Loyalty Number':'radio', options: ['Yes', 'No']},
    {'Phone':'radio', options: ['Yes', 'No']},
    {'Email':'radio', options: ['Yes', 'No']},
    {'Sign in/up identifier':'radio', options: ['Phone', 'Email']}
  ])
}

function createSection(sectionName, objectArray){
  for(let i =0; i<objectArray.length; i++){
    //create div element
    var sectionDiv = document.createElement('div')
    //set id of div to ${section}Div
    sectionDiv.setAttribute("id", `${sectionName}Div`)
    //put the div in the body
    section = document.body.appendChild(sectionDiv)
    //put some text in the div
    sectionDiv.innerHTML = sectionName
    createFormField(section, 'inputName', objectArray[i])
  }

}

function initializeForm(){
  createFormField('inputName')
  createFormField('inputName')
  createFormField('inputName')
  createFormField('inputName')
  createFormField('inputName')
}

function createFormField(section, inputName, objectArray){
  //get the form type (radio, text, wtvr)
  var questionType = Object.values(objectArray)[0]
  //get the options
  var questionOptions = objectArray.options
  //create div element
  var div = document.createElement('div')
  //set id of div to ${inputName}Div
  div.setAttribute("id", `${inputName}Div`)
  //put the div in the body
  section.appendChild(div)
  //put some text in the div
  div.innerHTML = inputName
  if(questionType = "radio"){
    makeRadioButtons(inputName, questionOptions)
  }
  
  function makeRadioButtons(inputName, questionOptions){
    for(let i = 0; i<questionOptions.length; i++){
      makeRadioButton(questionOptions[i], inputName)
    }
  }
  function makeRadioButton(option, inputName){
    //create the input element
    var answer = document.createElement('input')
    //make the input a radio button
    answer.setAttribute("type", "radio")
    //set name of radio button
    answer.setAttribute("name", `${inputName}Button`)
    //set innerHTML of radio button
    debugger/// makeing options appear next to radio buttons!
    answer.innerHTML= option
    //append the radio button to the div
    div.appendChild(answer)
  }
}



  function logValues(){
    for(let i =0;i<document.getElementsByTagName('input').length; i++){
      console.log(document.getElementsByTagName('input')[i].value)
    }
  }
