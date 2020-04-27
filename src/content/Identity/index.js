import React, { useEffect } from 'react';
import Accordion from '../../components/Accordion';
import './Identity.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pegawaiActions } from '../../_actions/pegawai.action';
import Loading from '../../components/Loading';



function Identity(){

    const dispacth = useDispatch();
    const loading = useSelector(state=>state.pegawai.isLoading);
    const data = useSelector(state => state.pegawai.data);
      useEffect(() => {
        dispacth(pegawaiActions.getDataPegawai())
      }, [])
    
      
    return(
        <div className="container-acc">
            <Loading active={loading}/>
            <div style={{padding:"3rem",marginBottom:"-4%"}} className="row">
                <h4>Personal Data</h4>
            </div>
            <div style={{padding:"2rem"}} className="row">
                <div className="col-md-3">
                        <Accordion/>
                </div>
                <div className="col-md-9">
                    <div className="jumbotron">
                        <div className="print float-right">
                            <i className="fa fa-print"></i>
                        </div>
                         <div className="profile">
                            <img className="img-profile" src="data:image/png;base64,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"></img>
                                <label style={{color:"white",display:"block",fontSize:"larger"}}>{data.nama}</label>
                         </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card employee-data">
                                <div className="_data-items">
                                    <h5>Data Pegawai</h5>
                                    <hr></hr>
                                    <form>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Nama</label>
                                        <div className="col-sm-8">
                                            <label>{data.nama}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">NIP</label>
                                        <div className="col-sm-8">
                                        <label>{data.nip}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Gol / Pangkat</label>
                                        <div className="col-sm-8">
                                        <label>{data.golpang}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Jabatan</label>
                                        <div className="col-sm-8">
                                        <label>{data.jabatan}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Tipe Jabatan</label>
                                        <div className="col-sm-8">
                                        <label>{data.tipejabatan}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Keterangan Pegawai</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Eselon</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Pendidikan Terakhir</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Tempat / Tanggal Lahir</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">No. Telp</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="data-items">
                                    <h5>Data Personal</h5>
                                    <hr></hr>
                                    <form>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Jenis Kelamin</label>
                                        <div className="col-sm-8">
                                        <label>Dendi Madisanto</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Agama</label>
                                        <div className="col-sm-8">
                                        <label>Dendi Madisanto</label>
                                        </div>
                                    </div>    
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">NIK</label>
                                        <div className="col-sm-8">
                                        <label>Dendi Madisanto</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">NPWP</label>
                                        <div className="col-sm-8">
                                        <label>198908262015021002</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Alamat</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">RT</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">RW</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Provinsi</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Kabupaten / Kota</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Kecamatan</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-4 col-form-label">Kode Pos</label>
                                        <div className="col-sm-8">
                                        <label>1919191</label>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                               <h5 style={{padding: "1rem"}}>Notification</h5>
                               <small className="view-more">view more...</small>
                               <small className="msg" style={{left:"8rem", color:"white"}}>100</small>
                               <ul className="list-group" style={{overflow: "auto",maxHeight: "250px"}}>
                                <li className="list-group-item">
                                    <div className="notification-content">
                                       <div className="row">
                                           <small style={{color:"darkGrey"}}>21 Januari 2020</small>
                                           <small style={{color:"purple"}}>Usulan Kenaikan Gaji Berkala periode 2020</small>
                                       </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="notification-content">
                                       <div className="row">
                                           <small style={{color:"darkGrey"}}>21 Januari 2020</small>
                                           <small style={{color:"purple"}}>Usulan Kenaikan Gaji Berkala periode 2020</small>
                                       </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="notification-content">
                                       <div className="row">
                                           <small style={{color:"darkGrey"}}>21 Januari 2020</small>
                                           <small style={{color:"purple"}}>Usulan Kenaikan Gaji Berkala periode 2020</small>
                                       </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="notification-content">
                                       <div className="row">
                                           <small style={{color:"darkGrey"}}>21 Januari 2020</small>
                                           <small style={{color:"purple"}}>Usulan Kenaikan Gaji Berkala periode 2020</small>
                                       </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Identity;