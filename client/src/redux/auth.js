import axios from 'axios'

const profileAxios = axios.create();
profileAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

function authError (key, errCode) {
    return {
        type: 'AUTH_ERROR',
        key,
        errCode
    }
}

export function authenticate(user) {
    return {
        type: 'AUTHENTICATE',
        user
    }
}

export function signup(userInfo) {
    return dispatch => {
        axios.post('/auth/signup', userInfo)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(authenticate(user))
            })
            .catch(err => {
                console.log(err)
                dispatch(authError('signup', err.response.status))
            })
    }
}

export function login(credentials) {
    return dispatch => {
        return axios.post('/auth/login', credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(authenticate(user))
            })
            .catch(err => {
                console.log(err)
                dispatch(authError('login', err.responsestatus))
            })
    }
}

export function verify() {
    return dispatch => {
      return profileAxios.get('/api/profile')
            .then(response => {
                let { user } = response.data;
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError('verify', err.response.status));
            })
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return {
        type: 'LOGOUT'
    }
}

const initialState = {
    user: {
        username: '',
        _id: ''
    },
    authErrCode: {
        signup: '',
        login: ''
    },
    isAuthenticated: false,
    loading: true
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'AUTH_ERROR':
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode,
                },
                loading: false
            }
        case 'AUTHENTICATE':
            return {
                ...state,
                user: action.user,
                isAuthenticated: true,
                authErrCode: initialState.authErrCode,
                loading: false
            }
        case 'LOGOUT':
            return {
                ...initialState,
                loading: false
            }
        default:
            return state;
    }
}

