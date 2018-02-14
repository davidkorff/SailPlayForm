window.onload=makeSection()
// window.onload=makeCircle()

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
    giftsQ1 = makeDivWithInput('What Gifts would you like to offer?', q5, 'h4', 'text', true)
     giftsQ2 = makeDiv('What is your desired process for redemption?', q5, 'h4')
      spDeliversPromoCodes = makeDivWithInput('SailPlay delivers Promo Codes', giftsQ2, 'h5', 'checkBox')
       pushGiftsToOnlineCart = makeDivWithInput('Push gifts to online cart', giftsQ2, 'h5', 'checkBox')
       awardGiftInStore = makeDivWithInput('Award gift in store', giftsQ2, 'h5', 'checkBox')
       sendEmailToManager = makeDivWithInput('Send email to manager to deliver gift', giftsQ2, 'h5', 'checkBox')

   q6 = makeDiv('Badges', document.body, 'h1')
     badgesQ1 = makeDivWithInput('Would you like to include badges?', q6, 'h4', 'checkBox')
     badgesQ2 = makeDivWithInput('What badges would you like to offer?', q6, 'h4', 'text', true)
     badgesQ3 = makeDivWithInput('What are the rules for completing each badge?', q6, 'h4', 'text', true)
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

          otherActions5 =  makeDivWithInput('Custom', includedActions2, 'h4', 'text', true)

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

     integrationQ1 = makeDivWithInput('What programs will we be integrating with?', q10, 'h4', 'text', true)

   q11 = makeDiv('Trigger Campaigns', document.body, 'h1')

    triggersQ1 = makeDivWithInput('What trigger campaigns would you like to include?',q11,'h4','text', true)

   q12 = makeDiv('Promo Campaigns', document.body, 'h1', true)

    promoCampaignsQ1 = makeDivWithInput('What promo campaigns would you like to include?',q12,'h4','text', true)

   q13 = makeDiv('Email Templates', document.body, 'h1')

    emailTemplatesQ1 = makeDivWithInput('Do you have emails you currently use and want to continue?',q13,'h4','checkBox')

   q14 = makeDiv('Design Assets', document.body, 'h1')

    designAssetsQ1 = makeDivWithInput('Do you have design assets you would like us to include in the design?',q14,'h4','checkBox')

   q15 = makeDiv('DNS Records', document.body, 'h1')

    dnsRecordsQ1 = makeDivWithInput('Please specify an email SailPlay can send over DNS records to be implimented on your Domain',q15,'h4','text')

   q16 = makeDiv('Analytics', document.body, 'h1')

    analyticsQ1 = makeDivWithInput('What analytics would you like to include?',q16,'h4','text', true)

   q17 = makeDiv('Promo Codes', document.body, 'h1')

    promoCodesQ1 = makeDivWithInput('Is your POS or ecommerce platform capable of generating PromoCodes',q17,'h4','checkBox')

   q18 = makeDiv('Certificates', document.body, 'h1')

    certificatesQ1 = makeDivWithInput('do you want to send certificates?',q18,'h4','checkBox')

   q19 = makeDiv('Data Sync Frequency', document.body, 'h1')

    dataSyncFrequencyQ1 = makeDivWithInput('How often do you want to sync your data',q19,'h4','text')

var submit = document.createElement('input')
submit.setAttribute("class", "center btn-lg btn-primary")
document.body.appendChild(submit)
submit.setAttribute('type', 'submit')
submit.addEventListener("click", submitForm)

}
