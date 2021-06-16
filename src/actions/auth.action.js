import { services } from '../services';


export const authActions = {
    fetchBanners,
}

function fetchedBanners(data) {
    return {
        type: 'FETCHED_NFT_BANNERS',
        data: data,
    }
}
function fetchBanners() {
    return (dispatch) => {
        const response = services.get(`/admin/banner/list`);
        return response.then((promise) => {
            if (promise.data) {
                dispatch(fetchedBanners(promise.data.data));
            } else {
                console.log('error in getBanners actions');
            }
        })
    }
}