(
    function(numChildren , partnersName , geoLocation , jobTitle){
        document.querySelector(
          '.result'
        ).innerText = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numChildren} kids.`

    }
)()
