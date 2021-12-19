import throttle from "lodash/throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(videoStart, 1000)); 
        
        player.getCurrentTime().then((sec) => {
            console.log(sec);
            localStorage.setItem("videoplayer-current-time", JSON.stringify(sec));
        });
   

const timeToStart =
    JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
console.log(timeToStart);

function videoStart(timeToStart) {
    console.log(timeToStart)
}
