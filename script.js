window.onload = function(){
    var seconds = 00;
    var milisecond = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputMiliseconds = document.getElementById("milisecond");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        milisecond = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;
        OutputMiliseconds.innerHTML = milisecond;
    });

    function startTimer(){
        milisecond++;
        if(milisecond <= 9){
            OutputMiliseconds.innerHTML = "0" + milisecond;
        }

        if(milisecond > 9){
            OutputMiliseconds.innerHTML = milisecond;
        }

        if(milisecond > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            milisecond = 0;
            OutputMiliseconds.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
    }
}