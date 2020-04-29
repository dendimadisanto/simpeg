import React from 'react';
import { menu } from '../../_helpers/arrayMenu';
import './Accordion.scss';
import { useSelector, useDispatch } from 'react-redux';
import { pegawaiActions } from '../../_actions/pegawai.action';

function Accordion(){
    const dispatch = useDispatch();
    const stateAcc = useSelector(state=>state.pegawai.accordion);

    function handleClickAcc(e){
       const sub = e.target.getAttribute('name');
       const menu = e.target.getAttribute('parent');

       const data = { menu, sub};
       dispatch(pegawaiActions.changeStateAcc(data))
       
    }
    return(
        <div className="accordion" id="accordionExample">
          {
           Object.keys(menu).map(key => 
              <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${key}`} aria-expanded="true" aria-controls={key}>
                      {menu[key]['nama']}
                  </button>
                </h2>
              </div>
              {
                menu[key]['sub'] &&  <div id={key} className={`collapse ${stateAcc['menu']===key ? `show` : ''}`} aria-labelledby="headingOne" data-parent="#accordionExample">
                <ul className="list-group">
                    {Object.keys(menu[key]['sub']).map(k => 
                      <li onClick={handleClickAcc} name={k} parent={key} className={`list-group-item ${stateAcc['sub']===k ? `aktif` : ''}` }>{menu[key]['sub'][k]['nama']}</li>
                    )}
               </ul>
            </div>
              }
            </div>
              )
          }
  
</div>
    );
}

export default Accordion;