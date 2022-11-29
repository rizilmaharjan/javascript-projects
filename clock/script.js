(function(){
    "use strict";
    let a, time, date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        function my_date() {

            a = new Date();
            date = a.toLocaleDateString(undefined,options);
            time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + "<br>on" + " " + date;
            document.querySelector("#live-time").innerHTML = time;


        }
        setInterval(my_date, 1000);
        
    
    
})();