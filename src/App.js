import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar'
import Container from '@material-ui/core/Container'
import Ano from './components/MaterialUiTable';
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
      { title: "joku5", field: "id" },
      { title: "joku6", field: "userId" },

    ]

    let columns1 = [
      { title: "monday1", field: "title" },
      { title: "monday2", field: "id" },
      { title: "monday3", field: "userId" },
      { title: "monday4", field: "body" },
      { title: "monday5", field: "field5" },
      { title: "monday6", field: "field6" },

    ]

    let columnS = [
      { title: "joku1", field: "title" },
      { title: "joku2", field: "id" },
      { title: "joku3", field: "userId" },
      { title: "joku4", field: "body" },
      { title: "joku5", field: "field5" },
      { title: "joku6", field: "field6" },

    ]

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
        </Container>


      </div>
    )
  }
}

