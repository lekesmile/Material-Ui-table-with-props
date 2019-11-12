import React, { Component } from 'react'
import MaterialTable from "material-table";



export default class Ano extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    title ={this.props.title}
                    columns={this.props.columns}

                    data={this.props.data}
                
                   
                />
            </div>
        ); 
    }
}
