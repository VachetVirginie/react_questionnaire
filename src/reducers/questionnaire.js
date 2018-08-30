import * as types from '../constants/ActionTypes'

const initialState = {
    questionLoader: false,
    questions: [],
    choices: [],
    showSlide: 0
};

const questionnaireReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_QUESTIONS:
            return {
            };
        case types.UPDATE_QUESTION_LOADER:
            return{
            }

        case types.CHANGE_SLIDE:
             return {
             }
        case types.UPDATE_CHOICE:
            const filteredChoices = (state.choices.filter(choice => choice.id_question !== action.id_question));
            return {
                ...state,
                choices: [
                    ...filteredChoices,
                    {
                        id_question: action.id_question,
                        id_answer: action.id_answer
                    }
                ]
            }

        default:
            return state;
    }
};
export default questionnaireReducer;