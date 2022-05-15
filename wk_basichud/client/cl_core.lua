Citizen.CreateThread(function()
    while true do
        SendNUIMessage({type = "stamina", staminabar = Config.Start.Stamina, staminavalue = GetPlayerSprintStaminaRemaining(PlayerId()), staminabarcolor = Config.Color.StaminaColor, right = Config.NUI.Stamina.right, bottom = Config.NUI.Stamina.bottom})
        SendNUIMessage({type = "health", healthbar = Config.Start.Health, healthvalue = GetEntityHealth(GetPlayerPed(-1)), healthbarcolor = Config.Color.HealthColor, right = Config.NUI.Health.right, bottom = Config.NUI.Health.bottom})
        Wait(1)
    end
end)

RegisterCommand('tt', function()
    print(GetEntityHealth(GetPlayerPed(-1)))
    print(GetPlayerSprintStaminaRemaining(PlayerId()))
end)