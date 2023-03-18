# x_notify


<h1> Fivem ESX X_Notify </h1>

<img src="https://i.imgur.com/TmkkJRp.png" />

<h1> Jak używać? </h1>

```lua

RegisterNetEvent('esx:showNotification')
AddEventHandler('esx:showNotification', function(msg)
	ESX.ShowNotification(msg)
end)


```
<h1> Wejdz w es_extended > client > functions , wyszukaj tego powyzej i zmien na to nizej  </h1>

```lua

RegisterNetEvent('x_notify:send')
AddEventHandler('x_notify:send', function(msg)
    ESX.ShowNotification(msg)
end)
