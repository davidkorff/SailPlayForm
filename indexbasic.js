window.onload=makeSection()
// window.onload=makeCircle()

function makeCircle(parentNode){
  var circle = document.createElement('input')
  circle.setAttribute('type', 'text')
  circle.setAttribute("class", 'addition')
  circle.innerHTML = "+"
  circle.value = "+"
  circle.style.color = 'red'
  circle.style.width = '20px'
  circle.style.height = '20px'
  circle.style.borderRadius = '20px'
  circle.style.fontSize = '30px'
  circle.style.text = 'center'
  circle.disabled = true
  circle.style.textAlign = "center"
  // parentNode.appendChild(circle)
}

function makeTextField(parentNode){
  var answer = document.createElement('input')
  answer.setAttribute('type', 'text')
  answer.setAttribute("id", `${parentNode.parentElement.id}Text`)
  answer.style.width = '200px'
  answer.style.height = '15px'
  answer.style.wordWrap = "break-word"
  parentNode.appendChild(answer)
  return answer
}

function makeDiv(divName, parentNode, textStyle){
  var div = document.createElement('div')
  div.setAttribute('id', `${divName}`)
  var style = document.createElement(`${textStyle}`)
  style.setAttribute("class", "center")
  parentNode.appendChild(div)
  div.appendChild(style)
  style.innerText = `${divName}`
  return div
}

function makeDivWithInput(divName, parentNode, textStyle, type){
  var div = document.createElement('div')
  div.setAttribute('id', `${divName}`)
  div.setAttribute("class", "form-group")
  var style = document.createElement(`${textStyle}`)
  style.setAttribute("class", "form-control")
  parentNode.appendChild(div)
  div.appendChild(style)
  style.innerText = `${divName}`
  if (type == 'checkBox'){
    makeCheckBox(style)
  }
  if (type == 'text'){
    var field = makeTextField(style)
    makeCircle(style)
  }
  if (type == 'radioButton'){
    makeRadioButton(divName, style)
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

function declareVariables(){
  var q1, systemVariables, firstName, systemVariables, middleName, lastName, taggedVariables, birthDate, gender, uniqueIdentifier, loyaltyNumberYes, phone, email, identifier, identifierPhone, identifierEmail

  var q2, statusSystem1q, statusSystem2q, statusSystem2aPoints, statusSystem2aMoney, statusSystem2aOther, statusSystem3q, statusSystem4q, statusSystem5q, statusSystem6q

  var q3, progressBar, progressBarStatusBar

  var q4, pointsCounter, moneySpentCounter, userProfileInfo, userProfileInfoFirstName, userProfileInfoLastName, userProfileInfoMiddleName, userProfileInfoBirthday, userProfileInfoGender, userProfileInfoEmail, userProfileInfoPhone, userProfileStatus, userProfileImage, userProfileInfoCustom

  var q5, giftsQ1, giftsQ2, spDeliversPromoCodes, pushGiftsToOnlineCart, awardGiftInStore, sendEmailToManager

  var q6, badgesQ1, badgesQ2, badgesQ3, badgesQ4

  var q7, actionsQ1, includedActions1, socialMediaActions1, facebookAction1, facebookAction2, facebookAction3, socialMediaActions2, twitterAction1, twitterAction2, socialMediaActions3, googleAction1, googleAction2, includedActions2, otherActions1, otherActions2, otherActions3, otherActions4, otherActions5

  var q8, leaderboardQ1

  var q9, desktopAppQ1, desktopAppQ2, desktopAppFeatures1, desktopAppFeatures2, desktopAppFeatures3, desktopAppFeatures4, desktopAppFeatures5, desktopAppFeatures6, desktopAppFeatures7, desktopAppFeatures8, desktopAppQ3, desktopAppPlatform1, desktopAppPlatform2

  var q10, integrationQ1

  var q11, triggersQ1

  var q12, promoCampaignsQ1

  var q13, emailTemplatesQ1

  var q14, designAssetsQ1

  var q15, dnsRecordsQ1

  var q16, analyticsQ1

  var q17, promoCodesQ1

  var q18, certificatesQ1

  var q19, dataSyncFrequencyQ1
}

function makeSection(){

  declareVariables()

   q1 = makeDiv('What data would you like to collect upon sign up?', document.body, 'h1')
     systemVariables = makeDiv('System Variables', q1, 'h2')
       firstName = makeDivWithInput('First Name', systemVariables, 'h5', 'checkBox')
       middleName = makeDivWithInput('Middle Name', systemVariables, 'h5', 'checkBox')
       lastName = makeDivWithInput('Last Name', systemVariables, 'h5', 'checkBox')
     taggedVariables = makeDiv('Tagged Variables', q1, 'h2')
       birthDate = makeDivWithInput('Birth Date', taggedVariables, 'h5', 'checkBox')
       gender = makeDivWithInput('Gender', taggedVariables, 'h5', 'checkBox')
     uniqueIdentifier = makeDiv('Unique Identifier', q1, 'h2')
       loyaltyNumberYes = makeDivWithInput('Loyalty Number', uniqueIdentifier, 'h5', 'checkBox')
       phone = makeDivWithInput('Phone', uniqueIdentifier, 'h5', 'checkBox')
       email = makeDivWithInput('Email', uniqueIdentifier, 'h5', 'checkBox')
      Phone.addEventListener("click", uniqueIdentifierSignUp)
      identifier = makeDiv('Sign in/up Identifier', uniqueIdentifier, 'h2')
      identifierPhone = makeDivWithInput('Phone', identifier, 'h5', 'radioButton')
      identifierEmail = makeDivWithInput('Email', identifier, 'h5', 'radioButton')
      identifierPhone.addEventListener('click', signUpUniqueIdentifier)
      identifierEmail.addEventListener('click', signUpUniqueIdentifier)

   q2 = makeDiv('Status System', document.body, 'h2')
     statusSystem1q = makeDivWithInput('Will you be using a Status System?', q2, 'h4', 'checkBox')
    document.getElementsByName("Will you be using a Status System?Button")[0].addEventListener("click", showStatusOptions)

   q3 = makeDiv('Please define your Progress Bar', document.body, 'h1')
    progressBar = makeDivWithInput('Progress Bar', q3, 'h3', 'checkBox')
    document.getElementsByName("Progress BarButton")[0].addEventListener('click', progressBarOptions)

   q4 = makeDiv('User Details Displayed on Page', document.body, 'h1')
     pointsCounter = makeDivWithInput('Points Counter', q4, 'h3', 'checkBox')
     moneySpentCounter = makeDivWithInput('Money Spent Counter', q4, 'h3', 'checkBox')
       userProfileInfo = makeDiv('User Profile Info', q4, 'h2')
       userProfileInfoFirstName = makeDivWithInput('First Name', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoLastName = makeDivWithInput('Last Name', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoMiddleName = makeDivWithInput('Middle Name', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoBirthday = makeDivWithInput('Birthday', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoGender = makeDivWithInput('Gender', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoEmail = makeDivWithInput('Email', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoPhone = makeDivWithInput('Phone', userProfileInfo, 'h5', 'checkBox')
       userProfileStatus = makeDivWithInput('Display Status Level', userProfileInfo, 'h5', 'checkBox')
       userProfileImage = makeDivWithInput('Display Image', userProfileInfo, 'h5', 'checkBox')
       userProfileInfoCustom = makeDivWithInput('Custom', userProfileInfo, 'h5', 'text')

   q5 = makeDiv('Gifts', document.body, 'h1')
    giftsQ1 = makeDivWithInput('What Gifts would you like to offer?', q5, 'h4', 'text')
     giftsQ2 = makeDiv('What is your desired process for redemption?', q5, 'h4')
      spDeliversPromoCodes = makeDivWithInput('SailPlay delivers Promo Codes', giftsQ2, 'h5', 'checkBox')
       pushGiftsToOnlineCart = makeDivWithInput('Push gifts to online cart', giftsQ2, 'h5', 'checkBox')
       awardGiftInStore = makeDivWithInput('Award gift in store', giftsQ2, 'h5', 'checkBox')
       sendEmailToManager = makeDivWithInput('Send email to manager to deliver gift', giftsQ2, 'h5', 'checkBox')

   q6 = makeDiv('Badges', document.body, 'h1')
     badgesQ1 = makeDivWithInput('Would you like to include badges?', q6, 'h4', 'checkBox')
     badgesQ2 = makeDivWithInput('What badges would you like to offer?', q6, 'h4', 'text')
     badgesQ3 = makeDivWithInput('What are the rules for completing each badge?', q6, 'h4', 'text')
     badgesQ4 = makeDivWithInput('Are badges based on Product purchases', q6, 'h4', 'checkBox')

   q7 = makeDiv('Actions', document.body, 'h1')

      actionsQ1 = makeDivWithInput('Would you like to include Actions?',q7,'h2','checkBox')

       includedActions1 = makeDiv('Social Media Options', actionsQ1, 'h3')

         socialMediaActions1 = makeDivWithInput('Facebook', includedActions1, 'h4', 'checkBox')

           facebookAction1 = makeDivWithInput('Join a group', socialMediaActions1, 'h5', 'checkBox')

           facebookAction2 = makeDivWithInput('Post about store', socialMediaActions1, 'h5', 'checkBox')

           facebookAction3 = makeDivWithInput('Share a Purchase', socialMediaActions1, 'h5', 'checkBox')

         socialMediaActions2 = makeDivWithInput('Twitter', includedActions1, 'h4', 'checkBox')

           twitterAction1 = makeDivWithInput('Follow Page', socialMediaActions2, 'h5', 'checkBox')

           twitterAction2 = makeDivWithInput('Share a Purchase', socialMediaActions2, 'h5', 'checkBox')

         socialMediaActions3 = makeDivWithInput('Google+', includedActions1, 'h4', 'checkBox')

           googleAction1 = makeDivWithInput('Join Group', socialMediaActions3, 'h5', 'checkBox')

           googleAction2 = makeDivWithInput('Share a Purchase', socialMediaActions3, 'h5', 'checkBox')

        includedActions2 = makeDiv('Other', actionsQ1, 'h3')

          otherActions1 = makeDivWithInput('Survey', includedActions2, 'h4', 'checkBox')

          otherActions2 = makeDivWithInput('Invite a friend', includedActions2, 'h4', 'checkBox')

          otherActions3 = makeDivWithInput('Watch a Youtube Video', includedActions2, 'h4', 'checkBox')

          otherActions4 = makeDivWithInput('Redirect Link', includedActions2, 'h4', 'checkBox')

          otherActions5 =  makeDivWithInput('Custom', includedActions2, 'h4', 'text')

   q8 = makeDiv('Leaderboard', document.body, 'h1')

     leaderboardQ1 = makeDivWithInput('Would you like to include a leaderboard?', q8, 'h4', 'checkBox')

   q9 = makeDiv('Desktop App', document.body, 'h1')

     desktopAppQ1 = makeDivWithInput('Will you require a desktop app?', q9, 'h4', 'checkBox')

     desktopAppQ2 = makeDiv('What features will you require the desktop app to have?', desktopAppQ1, 'h5', 'text')

     desktopAppFeatures1 = makeDivWithInput('Promo code validation', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures2 = makeDivWithInput('Merge user accounts', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures3 = makeDivWithInput('Award gifts', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures4 = makeDivWithInput('See past purchases', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures5 = makeDivWithInput('See favorite purchases', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures6 = makeDivWithInput('add/ subtract points', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures7 = makeDivWithInput('Add tags to user', desktopAppQ2, 'h6', 'checkBox')

     desktopAppFeatures8 = makeDivWithInput('Create user', desktopAppQ2, 'h6', 'checkBox')

     desktopAppQ3 = makeDiv('What platform will you be utlizing the app on?', desktopAppQ1, 'h5', 'text')

     desktopAppPlatform1 = makeDivWithInput('Mac', desktopAppQ3, 'h6', 'checkBox')

     desktopAppPlatform2 = makeDivWithInput("PC (excluding Window's Vista)", desktopAppQ3, 'h6', 'checkBox')

   q10 = makeDiv('Integration', document.body, 'h1')

     integrationQ1 = makeDivWithInput('What programs will we be integrating with?', q10, 'h4', 'text')

   q11 = makeDiv('Trigger Campaigns', document.body, 'h1')

    triggersQ1 = makeDivWithInput('What trigger campaigns would you like to include?',q11,'h4','text')

   q12 = makeDiv('Promo Campaigns', document.body, 'h1')

    promoCampaignsQ1 = makeDivWithInput('What promo campaigns would you like to include?',q12,'h4','text')

   q13 = makeDiv('Email Templates', document.body, 'h1')

    emailTemplatesQ1 = makeDivWithInput('Do you have emails you currently use and want to continue?',q13,'h4','checkBox')

   q14 = makeDiv('Design Assets', document.body, 'h1')

    designAssetsQ1 = makeDivWithInput('Do you have design assets you would like us to include in the design?',q14,'h4','checkBox')

   q15 = makeDiv('DNS Records', document.body, 'h1')

    dnsRecordsQ1 = makeDivWithInput('Please specify an email SailPlay can send over DNS records to be implimented on your Domain',q15,'h4','text')

   q16 = makeDiv('Analytics', document.body, 'h1')

    analyticsQ1 = makeDivWithInput('What analytics would you like to include?',q16,'h4','text')

   q17 = makeDiv('Promo Codes', document.body, 'h1')

    promoCodesQ1 = makeDivWithInput('Is your POS or ecommerce platform capable of generating PromoCodes',q17,'h4','checkBox')

   q18 = makeDiv('Certificates', document.body, 'h1')

    certificatesQ1 = makeDivWithInput('do you want to send certificates?',q18,'h4','text')

   q19 = makeDiv('Data Sync Frequency', document.body, 'h1')

    dataSyncFrequencyQ1 = makeDivWithInput('How often do you want to sync your data',q19,'h4','text')

var submit = document.createElement('input')
submit.setAttribute("class", "center btn-lg btn-primary")
document.body.appendChild(submit)
submit.setAttribute('type', 'submit')
submit.addEventListener("click", submitForm)

}
function submitForm(){
  // profile variables call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Included in Profile":
        "Included in Profile -
        First Name: ${firstName.children[0].children[0].checked},
        Middle Name: ${middleName.children[0].children[0].checked},
        Last Name: ${lastName.children[0].children[0].checked},
        Birthdate: ${birthDate.children[0].children[0].checked},
        Gender: ${gender.children[0].children[0].checked},
        Loyalty Number: ${loyaltyNumberYes.children[0].children[0].checked},
        Phone: ${phone.children[0].children[0].checked},
        Email: ${email.children[0].children[0].checked}"
    }`
  })
  // login identifier call
  $.get({
    url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Login":
        "Login -
        Login with Phone: ${identifierPhone.children[0].children[0].checked},
        Login With Email: ${identifierEmail.children[0].children[0].checked}"
    }`
  })

  // status system call
  if (statusSystem1q.children[0].children[0].checked==true){
    $.get(`https://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Status System?":
        "Status System -
        Using a status system?: ${statusSystem1q.children[0].children[0].checked},
        Status System based on?-
          Points: ${statusSystem2aPoints.children[0].children[0].checked},
          Money Spent: ${statusSystem2aMoney.children[0].children[0].checked},
          Other: ${statusSystem2aOther.children[0].children[0].checked},
        Status System Reset?:${statusSystem3q.children[0].children[0].checked},
        How Many Levels?:${statusSystem4q.children[0].children[0].value},
        What are the level's names?: ${statusSystem5q.children[0].children[0].value},
        What are thee rules to get to each level?: ${statusSystem6q.children[0].children[0].value},
        "
    }`)
  }
    else{
      $.get(`https://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
      {
        "Status System?":
          "Status System -
          Using a status system?: ${statusSystem1q.children[0].children[0].checked}"
      }`)
    }

  //Progress Bar call.
  if (progressBar.children[0].children[0].checked==true){
    if (statusSystem1q.children[0].children[0].checked==true){
      $.get({
        url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Progress Bar":
            "Progress Bar -
            Gift Bar: ${progressBarGiftsBar.children[0].children[0].checked},
            Status Bar: ${progressBarStatusBar.children[0].children[0].checked}
            "
        }`
      })
    }
    else{
      $.get({
        url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Progress Bar":
            "Progress Bar -
            Gift Bar: ${progressBarGiftsBar.children[0].children[0].checked},
            Status Bar: ${progressBarStatusBar.children[0].children[0].checked}
            "
        }`
      })
    }
  }
  else{
    $.get({
      url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
      {
        "Progress Bar":
          "Progress Bar - No Progress Bar"
      }`
    })
  }

  // User details on page call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "User details on page":
        "User details on page -
        Points Counter: ${pointsCounter.children[0].children[0].checked},
        Money Spent Counter: ${moneySpentCounter.children[0].children[0].checked},
        First Name: ${userProfileInfoFirstName.children[0].children[0].checked},
        Last Name: ${userProfileInfoLastName.children[0].children[0].checked},
        Middle Name: ${userProfileInfoMiddleName.children[0].children[0].checked},
        BirthDay: ${userProfileInfoBirthday.children[0].children[0].checked},
        Gender: ${userProfileInfoGender.children[0].children[0].checked},
        Email: ${userProfileInfoEmail.children[0].children[0].checked},
        Phone: ${userProfileInfoPhone.children[0].children[0].checked},
        Display Status Level: ${userProfileStatus.children[0].children[0].checked},
        Display Image: ${userProfileImage.children[0].children[0].checked},
        Custom: ${userProfileInfoCustom.children[0].children[0].value},
        "
    }`
  })

  // Gifts call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Gifts":
        "Gifts -
        What gifts?: ${giftsQ1.children[0].children[0].checked},
        SailPlay Delivers Promo Codes?: ${spDeliversPromoCodes.children[0].children[0].checked},
        Gifts pushed to Online Cart?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
        Award gifts In Store?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
        Send Email to manager to awar gift: ${sendEmailToManager.children[0].children[0].checked}
        "
    }`
  })

  // Badges call
  if(badgesQ1.children[0].children[0].checked==true){
    $.get({
      url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
      {
        "Badges":
          "Badges -
          Include badges?: ${badgesQ1.children[0].children[0].checked},
          What Badges?: ${badgesQ2.children[0].children[0].value},
          Badge rules?: ${badgesQ3.children[0].children[0].value},
          Product Based Badges?: ${badgesQ4.children[0].children[0].checked}
          "
      }`
    })
  }
    else{
      $.get({
        url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Badges":
            "Badges - No badges"
        }`
      })
    }

  // Actions call
  $.get({
      url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
      {
        "Actions":
          "Actions -
          Include Actions?: ${actionsQ1.children[0].children[0].checked},
          FB Group: ${facebookAction1.children[0].children[0].checked},
          Post on FB: ${facebookAction2.children[0].children[0].checked},
          Purchase on FB: ${facebookAction3.children[0].children[0].checked},
          Follow Twitter: ${twitterAction1.children[0].children[0].checked},
          Share Purchase on Twitter: ${twitterAction2.children[0].children[0].checked},
          Join G+ group: ${googleAction1.children[0].children[0].checked},
          Share Purchase on G+: ${googleAction2.children[0].children[0].checked},
          Survey: ${otherActions1.children[0].children[0].checked},
          Invite a friend: ${otherActions2.children[0].children[0].checked},
          Watch Youtube: ${otherActions3.children[0].children[0].checked},
          Page Redirect: ${otherActions4.children[0].children[0].checked},
          Custom: ${otherActions5.children[0].children[0].value}
          "
      }`
    })

  // Leaderboard call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Leaderboard":
        "Leaderboard - ${leaderboardQ1.children[0].children[0].checked}
        "
    }`
  })

  // Desktop App call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Desktop App":
        "Desktop App -
        Using a Desktop app?: ${desktopAppQ1.children[0].children[0].checked},
        Promo code validation: ${desktopAppFeatures1.children[0].children[0].checked},
        Merge users: ${desktopAppFeatures2.children[0].children[0].checked},
        Award gifts: ${desktopAppFeatures3.children[0].children[0].checked},
        See past purchases: ${desktopAppFeatures4.children[0].children[0].checked},
        See favorite Purchases: ${desktopAppFeatures5.children[0].children[0].checked}
        Add / Subtract Points: ${desktopAppFeatures6.children[0].children[0].checked}
        Add tags to users: ${desktopAppFeatures7.children[0].children[0].checked}
        Create User: ${desktopAppFeatures8.children[0].children[0].checked}
        Mac?: ${desktopAppPlatform1.children[0].children[0].checked}
        PC?: ${desktopAppPlatform2.children[0].children[0].checked}
        "
    }`
  })

  // Integration call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Integration":
        "Integration - ${integrationQ1.children[0].children[0].value}
        "
    }`
  })

  // Trigger Campaings call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Trigger Campaings":
        "Trigger Campaings - ${triggersQ1.children[0].children[0].value}
        "
    }`
  })

  // Promo Campaigns call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Promo Campaigns":
        "Promo Campaigns - ${promoCampaignsQ1.children[0].children[0].value}
        "
    }`
  })

  // Email Templates call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Email Templates":
        "Email Templates - ${emailTemplatesQ1.children[0].children[0].checked}
        "
    }`
  })

  // Design Assets call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Design Assets":
        "Design Assets - ${designAssetsQ1.children[0].children[0].checked}
        "
    }`
  })

  // DNS Records call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "DNS Records":
        "DNS Records - ${dnsRecordsQ1.children[0].children[0].value}
        "
    }`
  })

  // Analytics call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Analytics":
        "Analytics - ${analyticsQ1.children[0].children[0].value}
        "
    }`
  })

  // Promo Codes call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Promo Codes":
        "Promo Codes - ${analyticsQ1.children[0].children[0].value}
        "
    }`
  })

  // Certificates call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Certificates":
        "Certificates - ${certificatesQ1.children[0].children[0].value}
        "
    }`
  })

  // Data Synce Frequency call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Data Synce Frequency":
        "Data Synce Frequency - ${dataSyncFrequencyQ1.children[0].children[0].value}
        "
    }`
  })

  // add form submit tag
  $.get({
    url:'https://sailplay.net/js-api/1834/tags/add/?tags=Form Submitted&auth_hash=&email=test1@test.com&callback=1'
  })
}
