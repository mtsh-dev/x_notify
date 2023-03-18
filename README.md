# x_notify


<h1> Fivem ESX X_Notify </h1>

<img src="https://i.imgur.com/TmkkJRp.png" />

<h1> Jak używać? </h1>

```lua

ESX.ShowNotification = function(msg)
	SetNotificationTextEntry('STRING')
	AddTextComponentString(msg)
	DrawNotification(0,1)
end

>>>
