import { connect } from 'react-redux';
import App from '../components/App';
import rootSelector from '../selectors/RootSelector';

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(
  rootSelector,
  mapDispatchToProps
)(App)
