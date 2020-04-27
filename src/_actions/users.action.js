import { userServices } from '../_services';
import { userConstants } from '../_constants';
import Swal from 'sweetalert2';
import { history } from '../_helpers';


export const userActions = {
    login,
    logout
}

function login(username,password){
    return dispatch =>{
        dispatch(request(true));
        userServices.login(username, password).then(response=>{
           if(!response.success){
               dispatch(failure(response));
               dispatch(request(false))
           }
           else{
                 localStorage.setItem('token', response.data);
                 userServices.getUsers().then(response=>{
                     const user = {
                         ...response,
                         isLoggin:true
                     }
                     dispatch(success(user));
                     dispatch(request(false));
                     dispatch(failure({}));
                     localStorage.setItem('user', JSON.stringify(response));
                     history.push('/')
                    
                 });
           }
        }).
        catch(err => {
           dispatch(request(false));
           Swal.fire('Oops...', 'Ada Kesalahan Pada server', 'error');
          
        })
    }

    function request(value) { return { type: userConstants.LOGIN_REQUEST, value} }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(value) { return { type: userConstants.LOGIN_FAILURE, value} }
}

function logout(){
    userServices.logout().then(response=>{
        localStorage.removeItem('token');
        history.push('/login');
    }).catch(err => {
        Swal.fire('Oops...', 'Ada Kesalahan Pada server', 'error');
       
     });
     return { type: userConstants.LOGOUT };
}