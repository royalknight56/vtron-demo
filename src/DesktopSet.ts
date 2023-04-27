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
import ppticon from './assets/ppt.png'
import baidumapicon from './assets/baidumap.png'
import markdownicon from './assets/markdown.png'





// import MyComputer from "./components/apps/MyComputer.vue"
import Test2 from "./components/apps/Info.vue"
import Browser from "./components/apps/Browser.vue"
import AppConsole from "./components/apps/AppConsole.vue"
import GitStars from "./components/apps/GitStars.vue"
import GotoReadMe from './components/apps/GotoReadMe.vue';
import Calculator from './components/apps/Calculator.vue';
import APIVue from './components/apps/API.vue';
import PPT from './components/apps/PPT.vue';
import BaiduMap from './components/apps/BaiduMap.vue';
import MarkDown from './components/apps/MarkDown.vue';


let config = [
    // {
    //     title: 'vscode',
    //     icon: vscode,
    //     width: 800,
    //     height: 700,
    //     center: true,
    //     content: 'https://github1s.com/',
    //     resizable: true
    // },
    // {
    //     title: '咕噜Todo',
    //     icon: todoappicon,
    //     width: 800,
    //     height: 600,
    //     center: true,
    //     content: "https://groupgroupgroup.group",
    //     resizable: true
    // },
    // {
    //     title: '看月亮',
    //     icon: moonappicon,
    //     width: 800,
    //     height: 600,
    //     center: true,
    //     content: "http://static.myim.online/moon/",
    //     resizable: true
    // },
    {
        title: 'MarkDown',
        icon: markdownicon,
        width: 800,
        height: 600,
        center: true,
        content: MarkDown,
        resizable: true
    },
    {
        title: '百度地图',
        icon: baidumapicon,
        width: 800,
        height: 600,
        center: true,
        content: BaiduMap,
        resizable: true
    },
    {
        title: 'PPT',
        icon: ppticon,
        width: 770,
        height: 600,
        center: true,
        resizable: true,
        content: PPT
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
        resizable: true
    },
    {
        title: '浏览器',
        icon: chromeicon,
        width: 800,
        height: 600,
        center: true,
        content: Browser,
        resizable: true
    }  
]
export default config