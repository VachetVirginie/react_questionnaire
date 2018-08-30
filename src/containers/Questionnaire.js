import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Questionnaire from '../components/Questionnaire';
import * as actions from '../actions/index';


const mapStateToProps = state => ({
    questions: state.questions,
    questionLoader: state.questionLoader
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questionnaire)