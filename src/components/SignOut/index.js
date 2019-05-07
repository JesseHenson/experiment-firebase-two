import React from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes';

const onClick = (history,firebase) => {
    firebase.doSignOut()
    // history.push(ROUTES.HOME)
    // document.location.reload(true)
}

const SignOutButtonBase = ({firebase, history}) => {
    return (
        <button type="submit" onClick={() => onClick(history, firebase)}>
            Sign Out
        </button>
    )
}

const SignOutButton= compose(withRouter, withFirebase)(SignOutButtonBase);


export default SignOutButton;
