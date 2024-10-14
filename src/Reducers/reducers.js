import { TEST

} from "../Constants/constants";




export const TestReducers =  (state=[] , action) => {

    switch(action.type){

        case TEST:
            return {data:action.payload}
        default:
            return state

    }



}