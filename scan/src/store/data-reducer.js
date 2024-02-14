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
    data: null,
    data2: null,
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
   (data) => ({
        type: SET_DATA, payload: {data}
    })
export const setData2 =
    (data2) => ({
         type: SET_DATA, payload: {data2}
     })
  
export const getData = (token, inn, startDate, endDate, limit) => async (dispatch) => {
    console.log(token, inn, startDate, endDate, limit)
   
    let response = await dataAPI.getGeneralData(token, inn, startDate, endDate, limit);
        console.log(response.status)
        if (response.status === 200) {
            // success, get auth data
            console.log('yes')
            dispatch(setData(response.data))
        }
        else {
            console.log('No')
            // {_error: message}));
        };
    
    let response2 = await dataAPI.getData(token, inn, startDate, endDate, limit);
      console.log(response2.status)
      if (response2.status === 200) {
          // success, get auth data
          console.log('yes2')
          dispatch(setData2(response2.data))
      }
      else {
          console.log('No2')
          // {_error: message}));
      }
    
    }

export default dataReducer;



