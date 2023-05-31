
import vscode from "./assets/vscode.png";
import GitHub from "./assets/GitHub.png";
import winv3icon from "./assets/winv3.png";
import todoappicon from "./assets/todoapp.png";
import moonappicon from './assets/moonappicon.webp'
import ppticon from './assets/ppt.png'
import baidumapicon from './assets/baidumap.png'
import markdownicon from './assets/markdown.png'

import GitStars from "./components/apps/GitStars.vue"
import GotoReadMe from './components/apps/GotoReadMe.vue';
import MarkDown from './components/apps/MarkDown.vue';
import MusicVue from "./components/apps/Music.vue";


let config = [
    {
        title: 'github1s',
        icon: vscode,
        width: 800,
        height: 700,
        center: true,
        content: 'https://github1s.com/',
        resizable: true
    },
    {
        title: '咕噜Todo',
        icon: todoappicon,
        width: 800,
        height: 600,
        center: true,
        content: "https://groupgroupgroup.group",
        resizable: true
    },
    {
        title: '看月亮',
        icon: moonappicon,
        width: 800,
        height: 600,
        center: true,
        content: "http://static.myim.online/moon/",
        resizable: true
    },
    {
        title: 'MarkDown',
        icon: markdownicon,
        width: 800,
        height: 600,
        center: true,
        content: MarkDown,
        resizable: true
    },
    // {
    //     title: '音乐',
    //     icon: moonappicon,
    //     width: 800,
    //     height: 600,
    //     center: true,
    //     content: MusicVue,
    //     resizable: true
    // },
    {
        title: '百度地图',
        icon: baidumapicon,
        width: 800,
        height: 600,
        center: true,
        content: "https://map.baidu.com/",
        resizable: true
    },
    {
        title: 'PPT',
        icon: ppticon,
        width: 770,
        height: 600,
        center: true,
        resizable: true,
        content: "https://pipipi-pikachu.github.io/PPTist/"
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
        width: 770,
        height: 600,
        content: GotoReadMe,
        resizable: true
    },
]
export default config