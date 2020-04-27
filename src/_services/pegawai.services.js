import config from '../config/config';
import { authHeader } from '../_helpers';

export const pegawaiServices = {
   getDataPegawai
}

function getDataPegawai(pegawaiid){
    const requestOptions = {
        method: 'GET',
        headers : authHeader(),
    }

    return fetch(`${config.base_url}/pegawai/${pegawaiid}`, requestOptions).then(handleResponse)
}

function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        data.success = response.ok;
        return data;
    })
}

