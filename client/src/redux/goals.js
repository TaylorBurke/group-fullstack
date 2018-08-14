import axios from 'axios';

const goalAxios = axios.create();

goalAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

//Goals reducer
const initialGoals = [];

export default function goalsReducer (goals = initialGoals, action) {
    switch(action.type) {
        case 'SET_GOAL':
            return [...action.goals]
        case 'LOGOUT':
            return initialGoals;
        default:
            return goals;
    }
} 

const SET_GOAL = 'SET_GOAL';
const goalUrl = '/api/goals/'

//Action creators
function setGoals(goals) {
    return {
        type: SET_GOAL,
        goals
    }
}

export function loadGoals() {
    return dispatch => {
        goalAxios.get(goalUrl)
            .then(response => {
                dispatch(setGoals(response.data));
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function addGoal(goal) {
    return dispatch => {
        goalAxios.post(goalUrl, goal)
            .then(response => {
                dispatch(loadGoals());
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function editGoal(id, goal) {
    return dispatch => {
        goalAxios.put(goalUrl + id, goal)
            .then(response => {
                dispatch(loadGoals());
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function deleteGoal(id) {
    return dispatch => {
        goalAxios.delete(goalUrl + id)
            .then(response => {
                dispatch(loadGoals());
            })
            .catch(err => {
                console.log(err)
            })
    }
}
