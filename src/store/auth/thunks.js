import { signInWithGoogle } from '../../firebase/providers'
import { checkCredentials, login, logout } from './authSlice'

export const checkAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkCredentials())
    const result = await signInWithGoogle()
    console.log(result)
    if (result.ok) {
      dispatch(login(result))
    } else {
      dispatch(logout(result.errorMessage))
    }
  }
}
