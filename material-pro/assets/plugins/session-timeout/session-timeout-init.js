var SessionTimeout=function(){var i=function(){$.sessionTimeout({title:"Session Timeout Notification",message:"Your session is expiring soon.",redirUrl:"https://wrappixel.com/demos/admin-templates/material-pro/assets/plugins/session-timeout/lock-screen.html",logoutUrl:"https://wrappixel.com/demos/admin-templates/material-pro/assets/plugins/session-timeout/login2.html",warnAfter:5e3,redirAfter:2e4,ignoreUserActivity:!0,countdownMessage:"Redirecting in {timer} seconds.",countdownBar:!0})};return{init:function(){i()}}}();jQuery(document).ready(function(){SessionTimeout.init()});