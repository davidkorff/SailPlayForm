
function makeCircle(parentNode){
  var button = document.createElement('input')
  button.setAttribute("class", "btn-sm btn-primary")
  button.setAttribute('value','+')

  button.setAttribute('type', 'button')
  parentNode.appendChild(button)
  button.addEventListener("click", function(){ makeTextField(parentNode) })
  // parentNode.appendChild(circle)
}


function makeTextField(parentNode, bool){
  if (bool==true){
    // debugger
    makeCircle(parentNode)
  }
  var answer = document.createElement('input')
  answer.setAttribute('type', 'text')
  answer.setAttribute('class', 'text')
  answer.setAttribute("id", `${parentNode.parentElement.id}Text`)
  // answer.style.width = '80%'
  // answer.style.height = '20px'
  answer.style.wordWrap = "break-word"
  parentNode.appendChild(answer)
  return answer
}

function makeDiv(divName, parentNode, textStyle, classStyle){
  var div = document.createElement('div')
  div.setAttribute('id', `${divName}`)
  var style = document.createElement(`${textStyle}`)
  style.setAttribute("class", `${classStyle}`)
  parentNode.appendChild(div)
  div.appendChild(style)
  style.innerText = `${divName}`
  return div
}

function makeDivWithInput(divName, parentNode, textStyle, type, bool, className){
  var div = document.createElement('div')
  div.setAttribute('id', `${divName}`)
  div.setAttribute("class", "form-group")
  var style = document.createElement(`${textStyle}`)
  // style.setAttribute("class", "form-control")

  style.setAttribute("class", `${className}`)
  parentNode.appendChild(div)
  div.appendChild(style)
  style.innerText = `${divName}`
  if (type == 'checkBox'){
    makeCheckBox(style)
  }
  if (type == 'text'){
    var field = makeTextField(style, bool)
    // makeCircle(style)
  }
  if (type == 'radioButton'){
    makeRadioButton(divName, style)
  }
  if (type == 'email'){
    var answer = document.createElement('input')
    answer.setAttribute('type', 'email')
    answer.setAttribute('class', 'email')
    answer.setAttribute("id", `${parentNode.parentElement.id}Email`)
    // answer.style.width = '80%'
    // answer.style.height = '20px'
    answer.style.wordWrap = "break-word"
    parentNode.appendChild(answer)
  }
  return div
}

function makeRadioButton(option, parentNode){
  var answer = document.createElement('input')
  answer.setAttribute('type', 'radio')
  // answer.setAttribute("class", "form-control")
  answer.setAttribute("name", `${parentNode.parentElement.parentElement.id}RadioButton`)
  parentNode.appendChild(answer)
  //
}

function makeCheckBox(parentNode){
  var answer = document.createElement('input')
  answer.setAttribute('type', 'checkbox')
  answer.setAttribute("class", "form-text text-muted")
  answer.setAttribute("name", `${parentNode.parentElement.id}Button`)
  parentNode.appendChild(answer)
}
