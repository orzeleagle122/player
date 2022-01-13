import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {RootState} from "../../store";

export interface IInitialState {
    movieList: {
        recommended: any,
        topRated: any,
    }
    currentPlay:any,
    errorMessage:string,
    isFetching:boolean
}


const initialState:IInitialState = {
    movieList: {
        recommended: {},
        topRated: {},
    },
    currentPlay: {},
    errorMessage: "",
    isFetching: true,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMediaRecommendedList: (state, action) => {
            state.movieList.recommended = action.payload;
            state.isFetching = false;
        },
        getMediaTopRatedList: (state, action) => {
            state.movieList.topRated = action.payload;
            state.isFetching = false;
        },
        getMediaPlayInfo: (state, action) => {
            state.currentPlay = action.payload;
        },
        errorMessage: (state, action) => {
            state.errorMessage = action.payload;
            state.currentPlay = {};
        }
    }
})

export const {getMediaRecommendedList, getMediaPlayInfo, getMediaTopRatedList, errorMessage} = movieSlice.actions
export const getRecommendedMedias = (state:RootState) => state.movie.movieList.recommended;
export const getTopRatedMedias = (state:RootState)  => state.movie.movieList.topRated;
export const getCurrentVideo = (state:RootState)  => state.movie.currentPlay;
export const getErrorMessage = (state:RootState)  => state.movie.errorMessage;


// actions

const APIURL = 'https://thebetter.bsgroup.eu';

export const getMediaRecommendedListAction = (token:string) => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    return await axios.post(`${APIURL}/Media/GetMediaList`,
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

export const getMediaTopRatedListAction = (token:string) => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    return await axios.post(`${APIURL}/Media/GetMediaList`,
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

interface Iplay{
    id:number,
    permission:string
}

export const getMediaPlayInfoAction = (id:number, permission:string) => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
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

