import React, { Component } from 'react'
import axios from 'axios'
export default class resepti extends Component {
    state = {
       resept : [],
       searchString: ''

    }

    componentDidMount(){
      axios.get('http://localhost:5000')
      .then(res => res.json())
      .then(data =>{
          this.setState({
              resept : data
          })
      })
      .catch((e) => {return e})
    }

    render() {
        let {resept} = this.state
        return (
            <div>
                
            </div>
        )
    }
}
