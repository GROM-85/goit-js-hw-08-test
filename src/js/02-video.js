import Player from "@vimeo/player";
import { debounce } from "lodash";
import { throttle } from "lodash";


const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";

const playback = throttle((data)=>{
    const {seconds} = data;
    localStorage.setItem(CURRENT_TIME_KEY,seconds);
    console.log(localStorage.getItem(CURRENT_TIME_KEY))
},1500);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
player.on("timeupdate",playback);

