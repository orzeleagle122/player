import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    movieList: {
        recommended: {},
        topRated: {},
    },
    currentPlay: {},
    errorMessage: "",
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMediaRecommendedList: (state, action) => {
            state.movieList.recommended = action.payload
        },
        getMediaTopRatedList: (state, action) => {
            state.movieList.topRated = action.payload
        },
        getMediaPlayInfo: (state, action) => {
            state.currentPlay = action.payload
        },
        errorMessage: (state, action) => {
            state.errorMessage = action.payload;
        }
    }
})

export const {getMediaRecommendedList, getMediaPlayInfo, getMediaTopRatedList, errorMessage} = movieSlice.actions
export const getRecommendedMedias = state => state.movie.movieList.recommended;
export const getTopRatedMedias = state => state.movie.movieList.topRated;
export const getCurrentVideo = state => state.movie.currentPlay;
export const getErrorMessage = state => state.movie.errorMessage;


// actions

const APIURL = 'https://thebetter.bsgroup.eu';

export const getMediaRecommendedListAction = (token) => async (dispatch) => {
    await axios.post(`${APIURL}/Media/GetMediaList`,
        {
            MediaListId: 2,
            IncludeCategories: false,
            IncludeImages: true,
            IncludeMedia: false,
            PageNumber: 1,
            PageSize: 15
        }, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            }
        }
    )
        .then(response => {
            const {data} = response;
            dispatch(getMediaRecommendedList(data));
        })
        .catch(err => console.log(err));
}

export const getMediaTopRatedListAction = (token) => async (dispatch) => {
    await axios.post(`${APIURL}/Media/GetMediaList`,
        {
            MediaListId: 6,
            IncludeCategories: false,
            IncludeImages: true,
            IncludeMedia: false,
            PageNumber: 1,
            PageSize: 15
        }, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            }
        }
    )
        .then(response => {
            const {data} = response;
            dispatch(getMediaTopRatedList(data));
        })
        .catch(err => console.log(err));
}

export const getMediaPlayInfoAction = (id, permission) => async (dispatch) => {
    dispatch(errorMessage(""));
    const token = localStorage.getItem("token");
    await axios.post(`${APIURL}/Media/GetMediaPlayInfo`,
        {
            MediaId: id,
            StreamType: permission,
        }, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => {
            const {data} = res;
            dispatch(getMediaPlayInfo(data));
        })
        .catch(err => {
            dispatch(errorMessage("Sorry, no subscription purchased, log in as a guest to see demo versions of video materials."))
        })
}


export default movieSlice.reducer;

