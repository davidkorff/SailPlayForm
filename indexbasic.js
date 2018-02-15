window.onload=makeSection()
// window.onload=makeCircle()

function makeSection(){

  // declareVariables()

   q1 = makeDiv('What data would you like to collect upon sign up?', document.body, 'h1')
     systemVariables = makeDiv('System Variables', q1, 'h2')
       firstName = makeDivWithInput('First Name', systemVariables, 'h5', 'checkBox', false, 'form-control')
       middleName = makeDivWithInput('Middle Name', systemVariables, 'h5', 'checkBox', false, 'form-control')
       lastName = makeDivWithInput('Last Name', systemVariables, 'h5', 'checkBox', false, 'form-control')
     taggedVariables = makeDiv('Tagged Variables', q1, 'h2')
       birthDate = makeDivWithInput('Birth Date', taggedVariables, 'h5', 'checkBox', false, 'form-control')
       gender = makeDivWithInput('Gender', taggedVariables, 'h5', 'checkBox', false, 'form-control')
     uniqueIdentifier = makeDiv('Unique Identifier', q1, 'h2')
       loyaltyNumberYes = makeDivWithInput('Loyalty Number', uniqueIdentifier, 'h5', 'checkBox', false, 'form-control')
       phone = makeDivWithInput('Phone', uniqueIdentifier, 'h5', 'checkBox', false, 'form-control')
       email = makeDivWithInput('Email', uniqueIdentifier, 'h5', 'checkBox', false, 'form-control')
      Phone.addEventListener("click", uniqueIdentifierSignUp)
      identifier = makeDiv('Sign in/up Identifier', uniqueIdentifier, 'h2')
      identifierPhone = makeDivWithInput('Phone', identifier, 'h5', 'radioButton', false, 'form-control')
      identifierEmail = makeDivWithInput('Email', identifier, 'h5', 'radioButton', false, 'form-control')
      identifierPhone.addEventListener('click', signUpUniqueIdentifier)
      identifierEmail.addEventListener('click', signUpUniqueIdentifier)

   q2 = makeDiv('Status System', document.body, 'h2')
     statusSystem1q = makeDivWithInput('Will you be using a Status System?', q2, 'h4', 'checkBox', false, 'form-control')
     statusSystem2q = makeDiv('What will the status system be based on?', q2, 'h4', 'none')
       statusSystem2aPoints = makeDivWithInput('Points', statusSystem2q, 'h6', 'radioButton', false, 'none')
       statusSystem2aMoney = makeDivWithInput('Money Spent', statusSystem2q, 'h6', 'radioButton', false, 'none')
       statusSystem2aOther = makeDivWithInput('Other', statusSystem2q, 'h6', 'radioButton', false, 'none')
       statusSystem3q = makeDivWithInput('Does the status system reset?', q2, 'h5', 'checkBox', false, 'none')
       statusSystem4q = makeDivWithInput('How many levels?', q2, 'h3', 'text', false, 'none')
       statusSystem5q = makeDivWithInput('What are the level names?', q2, 'h3', 'text', false, 'none')
       statusSystem6q = makeDivWithInput('What are the rules to reach each level?', q2, 'h3', 'text', false, 'none')
    statusSystem1q.children[0].children[0].addEventListener('click', function(){
      if(statusSystem1q.children[0].children[0].checked == true){
        statusSystem2q = makeDiv('What will the status system be based on?', q2, 'h4')
        statusSystem2aPoints = makeDivWithInput('Points', statusSystem2q, 'h6', 'radioButton', false, 'form-control')
        statusSystem2aMoney = makeDivWithInput('Money Spent', statusSystem2q, 'h6', 'radioButton', false, 'form-control')
        statusSystem2aOther = makeDivWithInput('Other', statusSystem2q, 'h6', 'radioButton', false, 'form-control')
        statusSystem3q = makeDivWithInput('Does the status system reset?', q2, 'h5', 'checkBox', false, 'form-control')
        statusSystem4q = makeDivWithInput('How many levels?', q2, 'h3', 'text', false, 'form-control')
        statusSystem5q = makeDivWithInput('What are the level names?', q2, 'h3', 'text', false, 'form-control')
        statusSystem6q = makeDivWithInput('What are the rules to reach each level?', q2, 'h3', 'text', false, 'form-control')
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
      }
    })
       // makeDisplayDifferent('none',[statusSystem2q,statusSystem2aPoints,statusSystem2aMoney,statusSystem2aOther,statusSystem3q,statusSystem4q,statusSystem5q,statusSystem6q])

   q3 = makeDiv('Please define your Progress Bar', document.body, 'h1')
    progressBar = makeDivWithInput('Progress Bar', q3, 'h3', 'checkBox', false, 'form-control')
    progressBarStatusBar = makeDivWithInput('Status Bar', progressBar, 'h5', 'radioButton', false, 'form-control')
    // makeDisplayDifferent('none',[progressBarStatusBar])
    document.getElementsByName("Progress BarButton")[0].addEventListener('click', progressBarOptions)

   q4 = makeDiv('User Details Displayed on Page', document.body, 'h1')
     pointsCounter = makeDivWithInput('Points Counter', q4, 'h3', 'checkBox', false, 'form-control')
     moneySpentCounter = makeDivWithInput('Money Spent Counter', q4, 'h3', 'checkBox', false, 'form-control')
       userProfileInfo = makeDiv('User Profile Info', q4, 'h2')
       userProfileInfoFirstName = makeDivWithInput('First Name', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoLastName = makeDivWithInput('Last Name', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoMiddleName = makeDivWithInput('Middle Name', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoBirthday = makeDivWithInput('Birthday', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoGender = makeDivWithInput('Gender', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoEmail = makeDivWithInput('Email', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoPhone = makeDivWithInput('Phone', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileStatus = makeDivWithInput('Display Status Level', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileImage = makeDivWithInput('Display Image', userProfileInfo, 'h5', 'checkBox', false, 'form-control')
       userProfileInfoCustom = makeDivWithInput('Custom', userProfileInfo, 'h5', 'text', true, 'form-control')

   q5 = makeDiv('Gifts', document.body, 'h1')
    giftsQ1 = makeDivWithInput('What Gifts would you like to offer?', q5, 'h4', 'text', true, 'form-control')
     giftsQ2 = makeDiv('What is your desired process for redemption?', q5, 'h4')
      spDeliversPromoCodes = makeDivWithInput('SailPlay delivers Promo Codes', giftsQ2, 'h5', 'checkBox', false, 'form-control')
       pushGiftsToOnlineCart = makeDivWithInput('Push gifts to online cart', giftsQ2, 'h5', 'checkBox', false, 'form-control')
       awardGiftInStore = makeDivWithInput('Award gift in store', giftsQ2, 'h5', 'checkBox', false, 'form-control')
       sendEmailToManager = makeDivWithInput('Send email to manager to deliver gift', giftsQ2, 'h5', 'checkBox', false, 'form-control')

   q6 = makeDiv('Badges', document.body, 'h1')
     badgesQ1 = makeDivWithInput('Would you like to include badges?', q6, 'h4', 'checkBox', false, 'form-control')
     badgesQ2 = makeDivWithInput('What badges would you like to offer?', q6, 'h4', 'text', true, 'form-control')
     badgesQ3 = makeDivWithInput('What are the rules for completing each badge?', q6, 'h4', 'text', true,'form-control')
     badgesQ4 = makeDivWithInput('Are badges based on Product purchases', q6, 'h4', 'checkBox', false, 'form-control')

   q7 = makeDiv('Actions', document.body, 'h1')

      actionsQ1 = makeDivWithInput('Would you like to include Actions?',q7,'h2','checkBox')
       includedActions1 = makeDiv('Social Media Options', actionsQ1, 'h3')
         socialMediaActions1 = makeDivWithInput('Facebook', includedActions1, 'h4', 'checkBox', false, 'form-control')
           facebookAction1 = makeDivWithInput('Join a group', socialMediaActions1, 'h5', 'checkBox', false, 'form-control')
           facebookAction2 = makeDivWithInput('Post about store', socialMediaActions1, 'h5', 'checkBox', false, 'form-control')
           facebookAction3 = makeDivWithInput('Share a Purchase', socialMediaActions1, 'h5', 'checkBox', false, 'form-control')
         socialMediaActions2 = makeDivWithInput('Twitter', includedActions1, 'h4', 'checkBox', false, 'form-control')
           twitterAction1 = makeDivWithInput('Follow Page', socialMediaActions2, 'h5', 'checkBox', false, 'form-control')
           twitterAction2 = makeDivWithInput('Share a Purchase', socialMediaActions2, 'h5', 'checkBox', false, 'form-control')
         socialMediaActions3 = makeDivWithInput('Google+', includedActions1, 'h4', 'checkBox', false, 'form-control')
           googleAction1 = makeDivWithInput('Join Group', socialMediaActions3, 'h5', 'checkBox', false, 'form-control')
           googleAction2 = makeDivWithInput('Share a Purchase', socialMediaActions3, 'h5', 'checkBox', false, 'form-control')
        includedActions2 = makeDiv('Other', actionsQ1, 'h3', false, 'form-control')
          otherActions1 = makeDivWithInput('Survey', includedActions2, 'h4', 'checkBox', false, 'form-control')
          otherActions2 = makeDivWithInput('Invite a friend', includedActions2, 'h4', 'checkBox', false, 'form-control')
          otherActions3 = makeDivWithInput('Watch a Youtube Video', includedActions2, 'h4', 'checkBox', false, 'form-control')
          otherActions4 = makeDivWithInput('Redirect Link', includedActions2, 'h4', 'checkBox', false, 'form-control')
          otherActions5 =  makeDivWithInput('Custom', includedActions2, 'h4', 'text', true, 'form-control')

   q8 = makeDiv('Leaderboard', document.body, 'h1')

     leaderboardQ1 = makeDivWithInput('Would you like to include a leaderboard?', q8, 'h4', 'checkBox', false, 'form-control')

   q9 = makeDiv('Desktop App', document.body, 'h1')
     desktopAppQ1 = makeDivWithInput('Will you require a desktop app?', q9, 'h4', 'checkBox', false, 'form-control')
     desktopAppQ2 = makeDiv('What features will you require the desktop app to have?', desktopAppQ1, 'h5', 'text')
     desktopAppFeatures1 = makeDivWithInput('Promo code validation', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures2 = makeDivWithInput('Merge user accounts', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures3 = makeDivWithInput('Award gifts', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures4 = makeDivWithInput('See past purchases', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures5 = makeDivWithInput('See favorite purchases', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures6 = makeDivWithInput('add/ subtract points', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures7 = makeDivWithInput('Add tags to user', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppFeatures8 = makeDivWithInput('Create user', desktopAppQ2, 'h6', 'checkBox', false, 'form-control')
     desktopAppQ3 = makeDiv('What platform will you be utlizing the app on?', desktopAppQ1, 'h5', 'text')
     desktopAppPlatform1 = makeDivWithInput('Mac', desktopAppQ3, 'h6', 'checkBox', false, 'form-control')
     desktopAppPlatform2 = makeDivWithInput("PC (excluding Window's Vista)", desktopAppQ3, 'h6', 'checkBox', false, 'form-control')

   q10 = makeDiv('Integration', document.body, 'h1')

     integrationQ1 = makeDivWithInput('What programs will we be integrating with?', q10, 'h4', 'text', true, 'form-control')

   q11 = makeDiv('Trigger Campaigns', document.body, 'h1')

    triggersQ1 = makeDivWithInput('What trigger campaigns would you like to include?',q11,'h4','text', true, 'form-control')

   q12 = makeDiv('Promo Campaigns', document.body, 'h1', true)

    promoCampaignsQ1 = makeDivWithInput('What promo campaigns would you like to include?',q12,'h4','text', true, 'form-control')

   q13 = makeDiv('Email Templates', document.body, 'h1')

    emailTemplatesQ1 = makeDivWithInput('Do you have emails you currently use and want to continue?',q13,'h4','checkBox', false, 'form-control')

   q14 = makeDiv('Design Assets', document.body, 'h1')

    designAssetsQ1 = makeDivWithInput('Do you have design assets you would like us to include in the design?',q14,'h4','checkBox', false, 'form-control')

   q15 = makeDiv('DNS Records', document.body, 'h1')

    dnsRecordsQ1 = makeDivWithInput('Please specify an email SailPlay can send over DNS records to be implimented on your Domain',q15,'h4','text', false, 'form-control')

   q16 = makeDiv('Analytics', document.body, 'h1')

    analyticsQ1 = makeDivWithInput('What analytics would you like to include?',q16,'h4','text', true, 'form-control')

   q17 = makeDiv('Promo Codes', document.body, 'h1')

    promoCodesQ1 = makeDivWithInput('Is your POS or ecommerce platform capable of generating PromoCodes',q17,'h4','checkBox', false, 'form-control')

   q18 = makeDiv('Certificates', document.body, 'h1')

    certificatesQ1 = makeDivWithInput('do you want to send certificates?',q18,'h4','checkBox', false, 'form-control')

   q19 = makeDiv('Data Sync Frequency', document.body, 'h1')

    dataSyncFrequencyQ1 = makeDivWithInput('How often do you want to sync your data',q19,'h4','text', false, 'form-control')

var submit = document.createElement('input')
submit.setAttribute("class", "center btn-lg btn-primary")
document.body.appendChild(submit)
submit.setAttribute('type', 'submit')
submit.addEventListener("click", submitForm)

}
