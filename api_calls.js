function submitForm(){
  if (ValidateEmail(userInfoEmail.children[0].children[0].value)==true){
    //Customer info         &first_name=${userInfoFullName.children[0].children[0].value}

    $.get({
      url:`https://sailplay.net/api/v2/users/add/?token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&email=${userInfoEmail.children[0].children[0].value}&first_name=${userInfoFullName.children[0].children[0].value}&user_phone=${userInfoPhone.children[0].children[0].value}&extra_fields=auth_hash`,
      success: function (data) {
          console.log(`0. Client Info -
            email=${userInfoEmail.children[0].children[0].value}
            phone=${userInfoPhone.children[0].children[0].value}
            first_name=${userInfoFullName.children[0].children[0].value} `+data.status)
        },
        async: false
    })

    //included in profile
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
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
        }`,
        success: function (data) {
            console.log(`1. Included in Profile -
            First Name: ${firstName.children[0].children[0].checked},
            Middle Name: ${middleName.children[0].children[0].checked},
            Last Name: ${lastName.children[0].children[0].checked},
            Birthdate: ${birthDate.children[0].children[0].checked},
            Gender: ${gender.children[0].children[0].checked},
            Loyalty Number: ${loyaltyNumberYes.children[0].children[0].checked},
            Phone: ${phone.children[0].children[0].checked},
            Email: ${email.children[0].children[0].checked} `+data.status)
          },
          async: false
      })
      // login identifier call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Login":
            "Login -
            Login with Phone: ${identifierPhone.children[0].children[0].checked},
            Login With Email: ${identifierEmail.children[0].children[0].checked}"
        }`,
        success: function (data) {
            console.log(`2. Login -
            Login with Phone: ${identifierPhone.children[0].children[0].checked},
            Login With Email: ${identifierEmail.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // status system call
      $.get({
          url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
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
              What are thee rules to get to each level?: ${statusSystem6q.children[0].children[0].value}
              "
          }`,
          success: function (data) {
              console.log(`3. Status System -
              Using a status system?: ${statusSystem1q.children[0].children[0].checked},
              Status System based on?-
                Points: ${statusSystem2aPoints.children[0].children[0].checked},
                Money Spent: ${statusSystem2aMoney.children[0].children[0].checked},
                Other: ${statusSystem2aOther.children[0].children[0].checked},
              Status System Reset?:${statusSystem3q.children[0].children[0].checked},
              How Many Levels?:${statusSystem4q.children[0].children[0].value},
              What are the level's names?: ${statusSystem5q.children[0].children[0].value},
              What are thee rules to get to each level?: ${statusSystem6q.children[0].children[0].value} `+data.status)
            },
            async: false,
          })


      //Progress Bar call.
      // $.get({
      //   url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
      //   {
      //     "Progress Bar":
      //       "Progress Bar -
      //       Gift Bar: ${progressBarGiftsBar.children[0].children[0].checked},
      //       Status Bar: ${progressBarStatusBar.children[0].children[0].checked}
      //       "
      //   }`,
      //   success: function (data) {
      //       console.log("4. progress bar "+data.status)
      //     }
      // })


      // User details on page call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
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
            Custom: ${userProfileInfoCustom.children[0].children[0].value}
            "
        }`,
        async: false,
        success: function (data) {
            console.log(`3.5. User details on page -
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
            Custom: ${userProfileInfoCustom.children[0].children[0].value} `+data.status)
          },

      })

      // Gifts call
      var allGifts = allAnswersInOne(giftsQ1)
      // debugger
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Gifts":
            "Gifts -
            What gifts?: ${allGifts}
            SailPlay Delivers Promo Codes?: ${spDeliversPromoCodes.children[0].children[0].checked},
            Gifts pushed to Online Cart?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
            Award gifts In Store?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
            Send Email to manager to awar gift: ${sendEmailToManager.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`4. Gifts -
            What gifts?: ${allGifts}
            SailPlay Delivers Promo Codes?: ${spDeliversPromoCodes.children[0].children[0].checked},
            Gifts pushed to Online Cart?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
            Award gifts In Store?: ${pushGiftsToOnlineCart.children[0].children[0].checked},
            Send Email to manager to awar gift: ${sendEmailToManager.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // Badges call
      var allBadges = allAnswersInOne(badgesQ2)
      var allBadgeRules = allAnswersInOne(badgesQ3)
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Badges":
            "Badges -
            Include badges?: ${badgesQ1.children[0].children[0].checked},
            What Badges?: ${allBadges}
            Badge rules?: ${allBadgeRules}
            Product Based Badges?: ${badgesQ4.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`5. Badges -
            Include badges?: ${badgesQ1.children[0].children[0].checked},
            What Badges?: ${allBadges}
            Badge rules?: ${allBadgeRules}
            Product Based Badges?: ${badgesQ4.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })


      // Actions call
      var allCustomActions = allAnswersInOne(otherActions5)
      $.get({
          url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
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
          }`,
          success: function (data) {
              console.log(`6. Actions -
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
              Custom: ${allCustomActions} `+data.status)
            },
            async: false,
        })

      // Leaderboard call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Leaderboard":
            "Leaderboard - ${leaderboardQ1.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`7. Leaderboard - ${leaderboardQ1.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // Desktop App call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
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
        }`,
        success: function (data) {
            console.log(`8. Desktop App -
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
            PC?: ${desktopAppPlatform2.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // Integration call
      var allIntegrations = allAnswersInOne(integrationQ1)
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Integration":
            "Integration - ${allIntegrations}
            "
        }`,
        success: function (data) {
            console.log(`9. Integration - ${allIntegrations} `+data.status)
          },
          async: false,
      })

      // Trigger Campaings call
      var allTriggers = allAnswersInOne(triggersQ1)

      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Trigger Campaings":
            "Trigger Campaings - ${allTriggers}
            "
        }`,
        success: function (data) {
            console.log(`10. Trigger Campaings - ${allTriggers} `+data.status)
          },
          async: false,
      })

      // Promo Campaigns call
      var allPromos = allAnswersInOne(promoCampaignsQ1)
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Promo Campaigns":
            "Promo Campaigns - ${allPromos}
            "
        }`,
        success: function (data) {
            console.log(`11. Promo Campaigns - ${allPromos} `+data.status)
          },
          async: false,
      })

      // Email Templates call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Email Templates":
            "Email Templates - ${emailTemplatesQ1.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`12. Email Templates - ${emailTemplatesQ1.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // Design Assets call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Design Assets":
            "Design Assets - ${designAssetsQ1.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`13. Design Assets - ${designAssetsQ1.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // DNS Records call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "DNS Records":
            "DNS Records - ${dnsRecordsQ1.children[0].children[0].value}
            "
        }`,
        success: function (data) {
            console.log(`14. DNS Records - ${dnsRecordsQ1.children[0].children[0].value} `+data.status)
          },
          async: false,
      })

      // Analytics call
      var allAnalytics = allAnswersInOne(analyticsQ1)

      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Analytics":
            "Analytics - ${allAnalytics}
            "
        }`,
        success: function (data) {
            console.log(`15. Analytics - ${allAnalytics} `+data.status)
          },
          async: false,
      })

      // Promo Codes call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Promo Codes":
            "Promo Codes - ${promoCodesQ1.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`16. Promo Codes - ${promoCodesQ1.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // Certificates call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Certificates":
            "Certificates - ${certificatesQ1.children[0].children[0].checked}
            "
        }`,
        success: function (data) {
            console.log(`17. Certificates - ${certificatesQ1.children[0].children[0].checked} `+data.status)
          },
          async: false,
      })

      // Data Synce Frequency call
      $.get({
        url:`https://sailplay.net/api/v2/users/custom-vars/add/?email=${userInfoEmail.children[0].children[0].value}&token=fb6385e28aa6d6f7f84dd4624d475b609cf5c574&store_department_id=8898&vars=
        {
          "Data Synce Frequency":
            "Data Synce Frequency - ${dataSyncFrequencyQ1.children[0].children[0].value}
            "
        }`,
        success: function (data) {
            console.log(`18. Data Synce Frequency - ${dataSyncFrequencyQ1.children[0].children[0].value} `+data.status)
          },
          async: false,
      })

      // add form submit tag
      $.ajax({
        url:`https://sailplay.net/js-api/1834/tags/add/?tags=Form Submitted&auth_hash=&email=${userInfoEmail.children[0].children[0].value}`,
        async: false,
        success: function (data) {
            console.log("19. tag added "+data.status)
          }
      })
      // location.reload()

    }
}
