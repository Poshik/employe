import axios from 'axios'
import * as ActionTypes from '../../Apis/ActionTypes';
import * as ApiContant from '../../Apis/ApiConstants'
const brandMethod = (genderid,brandCategory,user_id) => {
    //alert(genderid)
    return dispatch => {
        dispatch(ActionPending());

        var formdata = new FormData();
        formdata.append("gender", genderid)
        formdata.append("brand_category", brandCategory)
        formdata.append("user_id", user_id)
        console.log(formdata, 'Tab Two Action');

        axios({
            url: ApiContant.BASE_URL + ApiContant.GET_BRAND_END_POINT,
            method: 'POST',
            data: formdata,
            headers: {
                Accept: 'application/json',
                "Content-Type": "multipart/form-data",
            },
            validateStatus: (status) => {
                return true;
            },
        }).then((responseJson) => {
            // console.log('GET_BRAND_END_POINT RESPONSE : ',JSON.stringify(responseJson.data))
            dispatch(ActionSuccess(responseJson.data));
        }).catch(error => {
            dispatch(ActionError(error));
        });
    }
}

export const ActionPending = () => {
    return {
        type: ActionTypes.TABTWO_PENDING,
    }
}

export const ActionError = (error) => {
    return {
        type: ActionTypes.TABTWO_ERROR,
        error: error
    }
}

export const ActionSuccess = (data) => {
    return {
        type: ActionTypes.TABTWO_SUCCESS,
        data: data
    }
}

export default {
    brandMethod
}
