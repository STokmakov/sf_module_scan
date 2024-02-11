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
  
export const getData = (token) => async (dispatch) => {
   
    let response = await dataAPI.info(token)
    console.log(response)
      }


export default dataReducer;



