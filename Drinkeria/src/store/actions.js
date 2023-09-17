import axiosClient from '../axiosClient';

export function searchDrinks({ commit }, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedDrinks', data.drinks)
        })
}