import avatar_bkm from "@/assets/images/members/avatar_bkm.jpg";
import avatar_xe from "@/assets/images/members/avatar_xe.webp";

// 当前成员列表
const members = [
    {
        avatar: "https://a.ppy.sh/9037287?1650110149.gif",
        name: "Zh_Jk",
        desc: "咕咕",
        url: "https://osu.ppy.sh/users/9037287",
        tags: ["管理", "运营", "开发"],
    },
    {
        avatar: "https://a.ppy.sh/3972977?1683356808.jpeg",
        name: "- Monologue -",
        desc: "啊什么",
        url: "https://osu.ppy.sh/users/3972977",
        tags: ["管理", "运营", "开发", "美工"],
    },
    {
        avatar: avatar_xe,
        name: "我恨延迟",
        desc: "1ms是一个很长的时间",
        url: "https://www.bilibili.com/read/cv15801974",
        tags: ["管理", "开发"],
    },
    {
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=787375539&s=100",
        name: "Rinko7614",
        desc: "我是地雷女",
        url: "https://space.bilibili.com/35750720",
        tags: ["运营", "库存管理"],
    },
    {
        avatar: "https://a.ppy.sh/16573996?1667099597.jpeg",
        name: "Voidmoyu",
        url: "https://space.bilibili.com/8046795",
        tags: [],
    },
    {
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=2773173293&s=100",
        name: "Jz0ojiang",
        desc: "↑ 怎么这里也有福瑞控",
        url: "https://im0o.cn",
        tags: ["开发"],
    },
    {
        avatar: avatar_bkm,
        name: "BK_Moe",
        desc: "月虫真滴帅嗷",
        url: "https://osu.ppy.sh/users/5462423",
        tags: ["生产"],
    },
    {
        avatar: "https://a.ppy.sh/1243669?1652632667.jpeg",
        name: "yf_bmp",
        url: "https://osu.ppy.sh/users/1243669",
        tags: ["开发"],
    },
    {
        avatar: "https://a.ppy.sh/3072921?1716493261.jpeg",
        name: "Callionet",
        url: "https://osu.ppy.sh/users/3072921",
        tags: ["美工"],
    },
    {
        avatar: "https://a.ppy.sh/15650011?1712387510.jpeg",
        name: "MotherShip",
        desc: "别捅我别捅我别捅我别捅我",
        url: "https://osu.ppy.sh/users/15650011",
        tags: ["开发"],
    },
    {
        avatar: "https://a.ppy.sh/16586663?1716536496.jpeg",
        name: "[GB]ChickenGold",
        desc: "我爱你们❤️",
        url: "https://osu.ppy.sh/users/16586663",
        tags: [],
    }
];

// 往期成员列表
const pastMembers = [
    {
        avatar: "https://a.ppy.sh/9062731?1679761786.jpeg",
        name: "Eiko Tokura",
        desc: "大家一定要开心哦！我会加油的~",
        url: "https://osu.ppy.sh/users/9062731",
        tags: [],
    },
    {
        avatar: "https://a.ppy.sh/15282372?1569921554.jpeg",
        name: "timi137",
        desc: "",
        url: "https://osu.ppy.sh/users/15282372",
        tags: ["开发"],
    },
    {
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=714554019&s=100",
        name: "literalkernel",
        desc: "",
        url: "https://osu.ppy.sh/users/14042683",
        tags: ["开发"],
    },
    {
        avatar: "https://a.ppy.sh/10269719?1658937681.jpeg",
        name: "_ChingC",
        desc: "",
        url: "https://osu.ppy.sh/users/10269719",
        tags: ["开发"],
    },
    {
        avatar: "https://a.ppy.sh/13184288?1690276121.jpeg",
        name: "Dana Iclucia",
        desc: "",
        url: "https://osu.ppy.sh/users/13184288",
        tags: ["运营"],
    },
    {
        avatar: "https://a.ppy.sh/7310344?1679326933.jpeg",
        name: "Hvi",
        desc: "",
        url: "https://osu.ppy.sh/users/7310344",
        tags: ["美工"],
    },
];

// 全体成员
const allMembers = [...members, ...pastMembers];

export type MemberItem = typeof members[number];

export { members, pastMembers, allMembers };