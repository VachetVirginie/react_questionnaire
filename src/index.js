import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Questionnaire from './containers/Questionnaire';



if (document.getElementById('questionnaire')) {
    ReactDOM.render(
        <Provider store={store}>
            <Questionnaire />
        </Provider>
        , document.getElementById('questionnaire'));
}