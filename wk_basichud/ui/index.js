var staminabar = false
var healthbar = false

$(function () {

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type == "stamina") {
            if (item.staminabar == true) {
                if (staminabar == false) {
                    staminabar = true
                    var staminabarhud = document.createElement("div")
                    var staminabarhudframe = document.createElement("div")
                    staminabarhudframe.id = "staminabarframe"
                    staminabarhudframe.style.position = "fixed"
                    staminabarhudframe.style.bottom = item.bottom + "vh"
                    staminabarhudframe.style.right = item.right + "vh"
                    staminabarhudframe.style.width = "3vh"
                    staminabarhudframe.style.height = "16vh"
                    staminabarhudframe.style.backgroundColor = "black"
                    staminabarhudframe.style.border = "5px solid rgba(68, 68, 68, 0.5)"
                    staminabarhudframe.style.borderRadius = "5vh"

                    staminabarhud.id = "staminabar"
                    staminabarhud.style.position = "absolute"
                    staminabarhud.style.width = "3vh"
                    staminabarhud.style.height = "16vh"
                    staminabarhud.style.bottom = "0"
                    staminabarhud.style.left = "0"
                    staminabarhud.style.borderRadius = "5vh"
                    staminabarhud.style.backgroundColor = item.staminabarcolor;

                    document.getElementById("container").appendChild(staminabarhudframe)
                    document.getElementById("staminabarframe").appendChild(staminabarhud)
                }
                document.getElementById('staminabar').style.height = 16 - (item.staminavalue * 0.16) + "vh"
            } else {
                if (staminabar == true) {
                    document.getElementById('staminabarframe').remove();
                    staminabar = false
                }
            }
        }
    })

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type == "health") {
            if (item.healthbar == true) {
                if (healthbar == false) {
                    healthbar = true
                    var healthbarhud = document.createElement("div")
                    var healthbarhudframe = document.createElement("div")
                    healthbarhudframe.id = "healthbarhudframe"
                    healthbarhudframe.style.position = "fixed"
                    healthbarhudframe.style.bottom = item.bottom + "vh"
                    healthbarhudframe.style.right = item.right + "vh"
                    healthbarhudframe.style.width = "3vh"
                    healthbarhudframe.style.height = "16vh"
                    healthbarhudframe.style.backgroundColor = "black"
                    healthbarhudframe.style.border = "5px solid rgba(68, 68, 68, 0.5)"
                    healthbarhudframe.style.borderRadius = "5vh"
                    healthbarhudframe.style.zIndex = "1"

                    healthbarhud.id = "healthbarhud"
                    healthbarhud.style.zIndex = "2"
                    healthbarhud.style.position = "absolute"
                    healthbarhud.style.width = "3vh"
                    healthbarhud.style.height = "16vh"
                    healthbarhud.style.bottom = "0"
                    healthbarhud.style.left = "0"
                    healthbarhud.style.borderRadius = "5vh"
                    healthbarhud.style.backgroundColor = item.healthbarcolor;

                    document.getElementById("container").appendChild(healthbarhudframe)
                    document.getElementById("healthbarhudframe").appendChild(healthbarhud)
                }
                document.getElementById("healthbarhud").style.height = item.healthvalue / 12.5 + "vh"
            } else {
                if (healthbar == true) {
                    document.getElementById("healthbarhudframe").remove();
                    healthbar = false
                }
            }
        }
    })

})