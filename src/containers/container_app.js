import { connect } from 'react-redux'

import App from '../components/component_app'
import Actions from '../actions/actions_app'

import {getIdByRandom} from '../utils/util'
import {convertForTypingNoSpecial} from '../utils/util'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        next: (state) => {
            const idNew = getIdByRandom(state.lLim, state.uLim);
            dispatch(Actions['next'](idNew));
        },
        typingProcess: (state,key) => {
            if (key.key === 'Escape' || key.key === 'ArrowRight') {
                const idNew = getIdByRandom(state.lLim, state.uLim);
                dispatch(Actions['next'](idNew));
            }
            else {
                const cs = convertForTypingNoSpecial(state.data[state.id][state.tgt]); //副作用？
                console.log(cs[state.typeCount]);
                if (key.key === cs[state.typeCount]) {
                    dispatch(Actions['typeCountIncrement']());
                    if (state.typeCount >= cs.length - 1) {
                        dispatch(Actions['completeWord']());
                    }
                }
                
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
