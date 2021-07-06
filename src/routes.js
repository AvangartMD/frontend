import { lazy } from 'react';

// lazy load check
function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

const Home = lazy(() => retry(() => import('./Pages/home')));
const NFTMinting = lazy(() => retry(() => import('./Pages/nftminting')));
const NftDetail = lazy(() => retry(() => import('./Pages/nftDetails')));
const MarketPlace = lazy(() => retry(() => import('./Pages/marketplace')));
const Creators = lazy(() => retry(() => import('./Pages/creators.jsx')));
const Profile = lazy(() => retry(() => import('./Pages/profile')));
const EditProfile = lazy(() => retry(() => import('./Pages/profile-edit')));
const Collection = lazy(() => retry(() => import('./Pages/collection.jsx')));
const CollectionDetail = lazy(() =>
  retry(() => import('./Pages/collection-detail'))
);
const CollectionDetailEdit = lazy(() =>
  retry(() => import('./Pages/collection-detail-edit'))
);
const HowToUse = lazy(() => retry(() => import('./Pages/how-to-use')));
const About = lazy(() => retry(() => import('./Pages/about')));
const Legal = lazy(() => retry(() => import('./Pages/legal')));
const CreatorProfile = lazy(() =>
  retry(() => import('./Pages/creator-profile'))
);
// import Home from './Pages/home';
// import NFTMinting from './Pages/nftminting';
// import NftDetail from './Pages/nftDetails';
// import MarketPlace from './Pages/marketplace';
// import Creators from './Pages/creators.jsx';
// import Profile from './Pages/profile';
// import EditProfile from './Pages/profile-edit';
// import Collection from './Pages/collection.jsx';
// import CollectionDetail from './Pages/collection-detail';
// import CollectionDetailEdit from './Pages/collection-detail-edit';
// import HowToUse from './Pages/how-to-use';
// import About from './Pages/about';
// import Legal from './Pages/legal';
// import CreatorProfile from './Pages/creator-profile';

var routes = [
  {
    path: '/',
    name: 'Landing',
    component: Home,
    layout: '/',
  },
  {
    path: '/nftminting',
    name: 'NFT Minting',
    component: NFTMinting,
    layout: '/user',
  },
  {
    path: 'marketplace',
    name: 'MarketPlace',
    component: MarketPlace,
    layout: '/',
  },
  {
    path: 'creators',
    name: 'Creators',
    component: Creators,
    layout: '/',
  },
  {
    path: '/edit-profile',
    name: 'Edit Profile',
    component: EditProfile,
    layout: '/user',
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    layout: '/user',
  },
  {
    path: 'creator/:id',
    name: 'Creator Profile',
    component: CreatorProfile,
    layout: '/',
  },
  {
    path: 'nftDetails/:id',
    name: 'NFT Detail',
    component: NftDetail,
    layout: '/',
  },
  {
    path: 'collections',
    name: 'Collections',
    component: Collection,
    layout: '/',
  },
  {
    path: 'collection-detail/:id',
    name: 'Collection Detail',
    component: CollectionDetail,
    layout: '/',
  },
  {
    path: 'collection-detail-edit',
    name: 'Collection Detail Edit',
    component: CollectionDetailEdit,
    layout: '/',
  },
  {
    path: 'how-to-use',
    name: 'How to Use',
    component: HowToUse,
    layout: '/',
  },
  {
    path: 'about',
    name: 'About Us',
    component: About,
    layout: '/',
  },
  {
    path: 'legal',
    name: 'Legal',
    component: Legal,
    layout: '/',
  },
];

export default routes;
