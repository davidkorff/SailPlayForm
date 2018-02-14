
function uniqueIdentifierSignUp(){

  if (phone.children[0].children[0].checked == false){
    phone.children[0].children[0].checked = false
  }
  if(email.children[0].children[0].checked == false){
    identifierEmail.children[0].children[0].checked = false
  }
}

function signUpUniqueIdentifier(){
  if (phone.children[0].children[0].checked == false){
    phone.children[0].children[0].checked=phone.children[0].children[0].checked

  }
  if (email.children[0].children[0].checked == false){
    email.children[0].children[0].checked=identifierEmail.children[0].children[0].checked
  }
}

function showStatusOptions(){
  //
  if(document.getElementsByName("Will you be using a Status System?Button")[0].checked == true){
     statusSystem2q = makeDiv('What will the status system be based on?', q2, 'h4')
       statusSystem2aPoints = makeDivWithInput('Points', statusSystem2q, 'h6', 'radioButton')
       statusSystem2aMoney = makeDivWithInput('Money Spent', statusSystem2q, 'h6', 'radioButton')
       statusSystem2aOther = makeDivWithInput('Other', statusSystem2q, 'h6', 'radioButton')
       statusSystem3q = makeDivWithInput('Does the status system reset?', q2, 'h5', 'checkBox')
       statusSystem4q = makeDivWithInput('How many levels?', q2, 'h3', 'text')
       statusSystem5q = makeDivWithInput('What are the level names?', q2, 'h3', 'text')
       statusSystem6q = makeDivWithInput('What are the rules to reach each level?', q2, 'h3', 'text')
       progressBarStatusBar = makeDivWithInput('Status Bar', progressBar, 'h5', 'radioButton')
   }
   else{
     statusSystem2q.remove()
     statusSystem2aPoints.remove()
     statusSystem2aMoney.remove()
     statusSystem2aOther.remove()
     statusSystem3q.remove()
     statusSystem4q.remove()
     statusSystem5q.remove()
     statusSystem6q.remove()
     progressBarStatusBar.remove()
   }
}

function progressBarOptions(){
  if (document.getElementsByName("Progress BarButton")[0].checked == true){
     progressBarGiftsBar = makeDivWithInput('Gifts Bar', progressBar, 'h5', 'radioButton')
     if (document.getElementsByName("Will you be using a Status System?Button")[0].checked == false){
       document.getElementsByName("Progress BarRadioButton")[0].checked = true
     }
  }
  else {
    progressBarGiftsBar.remove()
  }
}
