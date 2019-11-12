import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar'
import Container from '@material-ui/core/Container'
import Ano from './components/Ano';
import Axios from 'axios'


export default class App extends Component {
  state = {
    datata: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => {
        const { data } = res;
        this.setState({
          datata: data,
        });
        console.log(this.state)
      })

  }

  render() {
    
    let columns = [
      { title: "joku1", field: "title" },
      { title: "joku2", field: "id" },
      { title: "joku3", field: "userId" },
      { title: "joku4", field: "body" },
      { title: "joku5", field: "field5" },
      { title: "joku6", field: "field6" },

    ]
    let columns1 = [
      { title: "monday1", field: "title" },
      { title: "monday2", field: "id" },
      { title: "monday3", field: "userId" },
      { title: "monday4", field: "body" },
      { title: "monday5", field: "field5" },
      { title: "monday6", field: "field6" },

    ]
    // let data = [
    //   { field1: "this.props.nameme", field2: "this.props.surname", field3: "this.props.birthYear", field4:" this.props.birth1" },
    //   { field1: "this.props.nameme1", field2: "this.props.surname1", field3: "this.props.birthYear1", field4: "this.props.birth11" },

    // ]
    return (
      <div>
        <Navbar />
        <Container >
          <h1> Hello </h1>
          

          <Ano title="Demo"
            data={this.state.datata}
            columns={columns}
          
          />
          <Ano
            columns={columns1}
          />

{/* 
          <Ano
            title="Demo2"
            joku1="Nimi"
            joku2="Sukumi"
            joku3="Pehre"

            nameme="Jussi" surname="Damm" birthYear="1987" birth1="Espoo"
            nameme1="Anna" surname1="Solonainen" birthYear1="1987" birth11="Helsinki"
          />
          <Ano title="Fortnight"
            joku1="Dodo"
            joku2="Salami"
            joku3="Some"
            joku4="Day"
          /> */}
        </Container>
      </div>
    )
  }
}

