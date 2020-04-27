import React, { Component } from 'react';
import { Tree } from 'rc-easyui';
import PegawaiGrid from '../../components/Grid/pegawaiGrid';

class Pegawai extends Component{
    constructor() {
        super();
        this.state = {
          data: this.getData(),
          selection: null,
        }
      }
      getData() {
        return [
          {
            id: 1,
            text: "My Documents",
            children: [
              {
                id: 11,
                text: "Photos",
                state: "closed",
                children: [
                  {
                    id: 111,
                    text: "Friend"
                  },
                  {
                    id: 112,
                    text: "Wife"
                  },
                  {
                    id: 113,
                    text: "Company"
                  }
                ]
              },
              {
                id: 12,
                text: "Program Files",
                children: [
                  {
                    id: 121,
                    text: "Intel"
                  },
                  {
                    id: 122,
                    text: "Java"
                  },
                  {
                    id: 123,
                    text: "Microsoft Office"
                  },
                  {
                    id: 124,
                    text: "Games"
                  }
                ]
              },
              {
                id: 13,
                text: "index.html"
              },
              {
                id: 14,
                text: "about.html"
              },
              {
                id: 15,
                text: "welcome.html"
              }
            ]
          }
        ];
      }
      handleSelectionChange(selection) {
        this.setState({ selection: selection });
        console.log(selection);
      }
    render(){
        const { selection } = this.state;
        return(
            <div className="content">
                <div className="row">
                   <h4>Pegawai</h4>
                </div>
                <div className="row-items">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="tree" style={{padding: "0.5rem", height:"550px"}}>
                            <h5>Unit Kerja</h5>
                            <Tree data={this.state.data} onSelectionChange={this.handleSelectionChange.bind(this)}></Tree>
                                {
                                selection && <p>Selected: {selection.text}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="grid"  style={{padding: "0.5rem", height:"550px"}}>
                                <PegawaiGrid/>
                            </div>
                        </div>
                           
                    </div>
                </div>
            </div>
        );
    }
}

export default Pegawai;