RegisterNetEvent('x_notify:send')
AddEventHandler('x_notify:send', function(message)
    SendNUIMessage({
        name = 'addNotification',
        type = nil,
        message = message
    })
end)

RegisterCommand("notify", function()
    TriggerEvent('x_notify:send', '<b><span style="color: #329ea8;">TEST</span></b> </br>test wiadomosc')
end)

