import * as types from '../constants/ActionTypes';

export const fetchQuestions = function(questions){
    return async (dispatch) => {
        dispatch(updateQuestionLoader(true));
        const response = await fetch('http://autodiag.idmkr.io/questions');
        const datas = await response.json();
        dispatch(updateQuestionLoader(false));
        dispatch(addQuestions(datas));
        return datas;
    }
}

export const updateQuestionLoader = function(display){
    return { type: types.UPDATE_QUESTION_LOADER, display:display}
}


export const addQuestions = function(datas){
    return { type: types.ADD_QUESTIONS, questions:datas}
}