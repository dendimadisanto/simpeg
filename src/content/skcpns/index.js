import React from 'react';

function SKCPNS(){
    return(
        <div className="card" style={{padding:"1rem"}}>
            <div className="row">
                <i className="col-md-12 fa fa-print" style={{textAlign:"right"}}></i>
            </div>
            <div className="data-items">
                    <form>
                    <div className="row">
                        <label className="col-sm-4 col-form-label">Golongan Ruang</label>
                        <div className="col-sm-8">
                        <label>III/C</label>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-4 col-form-label">No. SK</label>
                        <div className="col-sm-8">
                        <label>Dendi Madisanto</label>
                        </div>
                    </div>    
                    <div className="row">
                        <label className="col-sm-4 col-form-label">Tgl. SK</label>
                        <div className="col-sm-8">
                        <label>Dendi Madisanto</label>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-4 col-form-label">TMT SK</label>
                        <div className="col-sm-8">
                        <label>198908262015021002</label>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-4 col-form-label">No. Pertek</label>
                        <div className="col-sm-8">
                        <label>1919191</label>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-4 col-form-label">Tgl. Pertek</label>
                        <div className="col-sm-8">
                        <label>1919191</label>
                        </div>
                    </div>
                        <fieldset class="border p-2">
                            <legend  class="w-auto">Pejabat yang menetapkan SK CPNS</legend>
                            <div className="row">
                                <label className="col-sm-4 col-form-label">Pejabat Penetap</label>
                                <div className="col-sm-8">
                                <label>1919191</label>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-sm-4 col-form-label">Nama Pejabat Penetap</label>
                                <div className="col-sm-8">
                                <label>1919191</label>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-sm-4 col-form-label">Nip Pejabat Penetap</label>
                                <div className="col-sm-8">
                                <label>1919191</label>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
    )
}

export default SKCPNS;