import { pegawaiServices } from '../_services';
import { pegawaiConstants } from '../_constants';
import Swal from 'sweetalert2';



export const pegawaiActions = {
    getDataPegawai,
    changeStateAcc
}

function getDataPegawai(username,password){
    return dispatch =>{
        const params = JSON.parse(localStorage.getItem('user'));
        const pegawaiid = params.data.PEGAWAIID;
        dispatch(request(true));
        pegawaiServices.getDataPegawai(pegawaiid).then(response=>{
            if(response.success){
                dispatch(request(false));
                dispatch(success(response.data[0]));
            }
        }).  catch(err => {
                dispatch(request(false));
                Swal.fire('Oops...', 'Ada Kesalahan Pada server', 'error');
           
         })
       
       
        
    }

    function request(value) { return { type: pegawaiConstants.PEGAWAI_REQUEST, value} }
    function success(value) { return { type: pegawaiConstants.PEGAWAI_SUCCESS, value } }
    function failure(value) { return { type: pegawaiConstants.PEGAWAI_ERROR, value} }
}

function changeStateAcc(data){
    return {
        type:pegawaiConstants.PEGAWAI_ACCORDION, data
    }
}

