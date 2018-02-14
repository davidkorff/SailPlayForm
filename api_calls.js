function submitForm(){
  // profile variables call
  function allAnswersInOne(parentParentNode){
    var answer = ""
    for (let i = parentParentNode.children[0].children.length; i>0 ; i--){
      var answer =  parentParentNode.children[0].children[i].value +', '+ answer
    }
    return answer
  }

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
  var allGifts = allAnswersInOne(giftsQ1)
  // debugger
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Gifts":
        "Gifts -
        What gifts?: ${allGifts}
        SailPlay Delivers Promo Codes?: ${spDeliversPromoCodes.children[0].children[0].checked},
        Gifts pushed to Online Cart?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
        Award gifts In Store?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
        Send Email to manager to awar gift: ${sendEmailToManager.children[0].children[0].checked}
        "
    }`
  })

  // Badges call
  var allBadges = allAnswersInOne(badgesQ2)
  var allBadgeRules = allAnswersInOne(badgesQ3)
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Badges":
        "Badges -
        Include badges?: ${badgesQ1.children[0].children[0].checked},
        What Badges?: ${allBadges}
        Badge rules?: ${allBadgeRules}
        Product Based Badges?: ${badgesQ4.children[0].children[0].checked}
        "
    }`
  })


  // Actions call
  var allCustomActions = allAnswersInOne(otherActions5)

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
          Custom: ${allCustomActions}
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
  var allIntegrations = allAnswersInOne(integrationQ1)
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Integration":
        "Integration - ${allIntegrations}
        "
    }`
  })

  // Trigger Campaings call
  var allTriggers = allAnswersInOne(triggersQ1)

  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Trigger Campaings":
        "Trigger Campaings - ${allTriggers}
        "
    }`
  })

  // Promo Campaigns call
  var allPromos = allAnswersInOne(promoCampaignsQ1)
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Promo Campaigns":
        "Promo Campaigns - ${allPromos}
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
  var allAnalytics = allAnswersInOne(analyticsQ1)

  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Analytics":
        "Analytics - ${allAnalytics}
        "
    }`
  })

  // Promo Codes call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Promo Codes":
        "Promo Codes - ${promoCodesQ1.children[0].children[0].checked}
        "
    }`
  })

  // Certificates call
  $.get({
    url:`http://sailplay.net/api/v2/users/custom-vars/add/?email=test1@test.com&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
    {
      "Certificates":
        "Certificates - ${certificatesQ1.children[0].children[0].checked}
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
