import { GET_TOTAL_STATSTICS,GET_WEEKLY_STATSTICS} from "../action/types"

const initialState={
    wekklystat:{},
    totalstat:{}
}
export default function(state = initialState, action){
    console.log(action.type)
    switch(action.type){

        case GET_WEEKLY_STATSTICS:
        
            return{
                ...state,
                wekklystat:action.wekklystat
            }
        case GET_TOTAL_STATSTICS:
               
            return{
                ...state,
                totalstat:action.totalstat
            }
        default:
            return {...state}
    
    }
}