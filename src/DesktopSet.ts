import beat from "./assets/beat.ico";
// import brower from "./assets/brow.png";
import chromeicon from "./assets/chromeicon.png";

import term from "./assets/term.ico";
import vscode from "./assets/vscode.png";
import GitHub from "./assets/GitHub.png";
import winicon from "./assets/win.png";
import winv3icon from "./assets/winv3.png";
import mmPlayericon from "./assets/mmPlayer.png";
import calcicon from "./assets/calcicon.png";
import todoappicon from "./assets/todoapp.png";
import moonappicon from './assets/moonappicon.webp'



// import MyComputer from "./components/apps/MyComputer.vue"
import Test2 from "./components/apps/Info.vue"
import Browser from "./components/apps/Browser.vue"
import AppConsole from "./components/apps/AppConsole.vue"
import GitStars from "./components/apps/GitStars.vue"
import GotoReadMe from './components/apps/GotoReadMe.vue';
import Calculator from './components/apps/Calculator.vue';
import APIVue from './components/apps/API.vue';
let config = [
    {
        title: '终端',
        icon: term,
        width: 600,
        height: 370,
        content: AppConsole,
        isScalable: false
    },
    {
        title: 'vscode',
        icon: vscode,
        width: 800,
        height: 700,
        center: true,
        content: 'https://github1s.com/',
        isScalable: true
    },
    {
        title: '功能与API',
        icon: winicon,
        width: 300,
        height: 300,
        center: true,
        content: APIVue,
        isScalable: true
    },
    {
        title: 'mmPlayer',
        icon: mmPlayericon,
        width: 850,
        height: 500,
        center: true,
        content: "https://netease-music.fe-mm.com/",
        isScalable: true
    },
    {
        title: '咕噜Todo',
        icon: todoappicon,
        width: 800,
        height: 600,
        center: true,
        content: "https://groupgroupgroup.group",
        isScalable: true
    },
    {
        title: '看月亮',
        icon: moonappicon,
        width: 800,
        height: 600,
        center: true,
        content: "http://static.myim.online/moon/",
        isScalable: true
    },
    {
        title: '点个star',
        icon: GitHub,
        width: 170,
        height: 100,
        content: GitStars
    },
    {
        title: '文档',
        icon: winv3icon,
        width: 170,
        height: 100,
        content: GotoReadMe,
        isScalable: true
    },
    {
        title: '浏览器',
        icon: chromeicon,
        width: 800,
        height: 600,
        center: true,
        content: Browser,
        isScalable: true
    }  
]
export default config