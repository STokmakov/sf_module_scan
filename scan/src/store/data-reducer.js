import { dataAPI } from "../api/data-api";

const SET_DATA = 'SET_DATA'

let initialState = {
    inn: null,
    completeness: false,
    businessContext: false,
    mainRole: false,
    tonality: "any",
    riskFactors: false,
    technicalNews: false,
    announcements: false,
    newsDigests: false,
    documentCount: null,
    startDate: null,
    endDate: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setData =
   (completeness) => ({
        type: SET_DATA, payload: {completeness}
    })
  
export const getData = (token, inn, startDate, endDate, limit) => async (dispatch) => {
    console.log(token, inn, startDate, endDate, limit)
   
    let response = await dataAPI.getGeneralData(token, inn, startDate, endDate, limit);
        console.log(response)
        if (response.status === 200) {
            // success, get auth data
            console.log('yes')
        }
        else {
            console.log('No')
            // {_error: message}));
        }
      }


export default dataReducer;



