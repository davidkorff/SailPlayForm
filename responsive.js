
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


// function progressBarOptions(){
//   if (document.getElementsByName("Progress BarButton")[0].checked == true){
//      progressBarGiftsBar = makeDivWithInput('Gifts Bar', progressBar, 'h5', 'radioButton')
//      if (document.getElementsByName("Will you be using a Status System?Button")[0].checked == false){
//        document.getElementsByName("Progress BarRadioButton")[0].checked = true
//      }
//   }
//   else {
//     progressBarGiftsBar.remove()
//   }
// }



function makeDisplayDifferent(styleClass, nodeArray){
  for(let i = 0; i<nodeArray.length; i++){
    // nodeArray[i].setAttribute('class',`${styleClass}`)
    nodeArray[i] = makeDivWithInput('Points', statusSystem2q, 'h6', 'radioButton', false, `${styleClass}`)
  }

}
