import { connect } from 'react-redux'

import App from '../components/component_app'
//import Actions from '../actions/action_app'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
