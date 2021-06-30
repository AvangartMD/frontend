// import Login from "./components/Login";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
import Home from "./Pages/home";
import NFTMinting from "./Pages/nftminting";
import NftDetail from "./Pages/nftDetails";
import MarketPlace from "./Pages/marketplace";
import Creators from "./Pages/creators";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/profile-edit";

var routes = [
  {
    path: "/",
    name: "Landing",
    component: Home,
    layout: "/",
  },
  {
    path: "nftminting",
    name: "NFT Minting",
    component: NFTMinting,
    layout: "/",
  },
  {
    path: "marketplace",
    name: "MarketPlace",
    component: MarketPlace,
    layout: "/",
  },
  {
    path: "creators",
    name: "Creators",
    component: Creators,
    layout: "/",
  },
  {
    path: "edit-profile",
    name: "Edit Profile",
    component: EditProfile,
    layout: "/",
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile,
    layout: "/",
  },
  {
    path: "nftDetails",
    name: "NFT Detail",
    component: NftDetail,
    layout: "/",
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
];

export default routes;
