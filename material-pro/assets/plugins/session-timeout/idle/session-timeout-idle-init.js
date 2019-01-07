var UIIdleTimeout = function() {
    return {
        init: function() {
            var o;
            $("body").append(""), $.idleTimeout("#idle-timeout-dialog", ".modal-content button:last", {
                idleAfter: 5,
                timeout: 3e4,
                pollingInterval: 5,
                keepAliveURL: "/keep-alive",
                serverResponseEquals: "OK",
                onTimeout: function() {
                    window.location = "https://wrappixel.com/demos/admin-templates/material-pro/assets/plugins/session-timeout/idle/lock-screen.html"
                },
                onIdle: function() {
                    $("#idle-timeout-dialog").modal("show"), o = $("#idle-timeout-counter"), $("#idle-timeout-dialog-keepalive").on("click", function() {
                        $("#idle-timeout-dialog").modal("hide")
                    })
                },
                onCountdown: function(e) {
                    o.html(e)
                }
            })
        }
    }
}();
jQuery(document).ready(function() {
    UIIdleTimeout.init()
});

/*$.idleTimeout('#idletimeout', '#idletimeout a', {
    idleAfter: 5,
    pollingInterval: 2,
    keepAliveURL: 'https://wrappixel.com/demos/admin-templates/material-pro/assets/plugins/session-timeout/idle/keep.php',
    serverResponseEquals: 'OK',
    onTimeout: function(){
        $(this).slideUp();
        window.location = "https://wrappixel.com/demos/admin-templates/material-pro/assets/plugins/session-timeout/idle/lock-screen.html";
    },
    onIdle: function(){
        $(this).slideDown(); // show the warning bar
    },
    onCountdown: function( counter ){
        $(this).find("span").html( counter ); // update the counter
    },
    onResume: function(){
        $(this).slideUp(); // hide the warning bar
    }
});*/