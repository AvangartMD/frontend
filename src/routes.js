import Home from "./Pages/home";
import NFTMinting from "./Pages/nftminting";
import NftDetail from "./Pages/nftDetails";
import MarketPlace from "./Pages/marketplace";
import Creators from "./Pages/creators";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/profile-edit";
import Collection from "./Pages/collection";
import CollectionDetail from "./Pages/collection-detail";
import CollectionDetailEdit from "./Pages/collection-detail-edit";


var routes = [
  {
    path: "/",
    name: "Landing",
    component: Home,
    layout: "/",
  },
  {
    path: "/nftminting",
    name: "NFT Minting",
    component: NFTMinting,
    layout: "/user",
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
    path: "/edit-profile",
    name: "Edit Profile",
    component: EditProfile,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    layout: "/user",
  },
  {
    path: "nftDetails/:id",
    name: "NFT Detail",
    component: NftDetail,
    layout: "/",
  },
  {
    path: "collections",
    name: "Collections",
    component: Collection,
    layout: "/",
  },
  {
    path: "collection-detail/:id",
    name: "Collection Detail",
    component: CollectionDetail,
    layout: "/",
  },
  {
    path: "collection-detail-edit",
    name: "Collection Detail Edit",
    component: CollectionDetailEdit,
    layout: "/",
  },
];

export default routes;
