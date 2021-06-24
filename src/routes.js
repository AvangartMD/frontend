// import Login from "./components/Login";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
import Home from './Pages/home';
import NFTMinting from './Pages/nftminting';
import MarketPlace from './Pages/marketplace'
import Creators from './Pages/creators'
import Profile from './Pages/profile'
import ProfileEdit from './Pages/profile-edit'


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
    {
        path: 'marketplace',
        name: 'NFT Minting',
        component: MarketPlace,
        layout: '/',
    },
    {
        path: 'creators',
        name: 'NFT Minting',
        component: Creators,
        layout: '/',
    },
    
    {
        path: 'profile',
        name: 'NFT Minting',
        component: Profile,
        layout: '/',
    },
    
    {
        path: 'profile-edit',
        name: 'NFT Minting',
        component: ProfileEdit,
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