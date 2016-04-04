import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import rootSelector from '../selectors/RootSelector';
import rootActionCreator from '../actions/RootActionCreator';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(rootActionCreator, dispatch),
    dispatch
  }
}

export default connect(
  rootSelector,
  mapDispatchToProps
)(App)
