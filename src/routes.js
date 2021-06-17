// import Login from "./components/Login";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
import Home from './Pages/home';
import NFTMinting from './Pages/nftminting';


var routes = [
    {
        path: '/',
        name: 'Landing',
        component: Home,
        layout: '/',
    },
    {
        path: 'nftminting',
        name: 'NFT Minting',
        component: NFTMinting,
        layout: '/',
    },
    // {
    //     path: "login",
    //     name: "User Login",
    //     component: Login,
    //     layout: "/",
    // },
    // {
    //     path: "",
    //     name: "User Dashboard",
    //     component: Dashboard,
    //     layout: "/user",
    // }
]

export default routes;