import {System} from "vue3-win10"
import backimg from "./assets/back.jpg"
let system = new System({
    if_logo_show: true,
    start_time: 1200,
    // start_menu_logo: menuicon,
    backimg: backimg,
});
export {
    system
}