import { 
    
    TEST


} from "../Constants/constants";


export const Test = () => async (dispatch) => {
   
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }


    dispatch({
        type:TEST,
        payload:"Test successful"
    })



}