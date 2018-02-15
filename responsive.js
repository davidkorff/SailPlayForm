
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

function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

// profile variables call
function allAnswersInOne(parentParentNode){
  var answer = ""
  for (let i = parentParentNode.children[0].children.length-1; i>0 ; i--){
    var answer =  parentParentNode.children[0].children[i].value +', '+ answer
  }
  return answer
}
