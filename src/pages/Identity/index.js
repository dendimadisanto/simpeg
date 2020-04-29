import React from 'react';
import Layout from '../../layout';
import Identity from '../../content/Identity'
import Skcpns from '../../content/skcpns';
import RiwGaji from '../../content/riwgaji';
import { useSelector } from 'react-redux';

function IdentityPage(){

    const menu = useSelector(state=>state.pegawai.accordion);
    function getComponent(){
        switch(menu['sub']){
            case 'identitas':
                return <Identity/>;
                break;
            case 'skcpns':
                return <Skcpns/>;
                break;
            case 'gaji':
                return <RiwGaji/>;
                break;
        }
    }
    return(
        <Layout>
          {getComponent()}
          
        </Layout>
    )
}

export default IdentityPage;