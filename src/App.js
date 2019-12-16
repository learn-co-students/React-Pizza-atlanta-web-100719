import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  defaultPizza = {
    id: 0,
    topping: '',
    size: '',
    vegetarian: false
  }

  state = {
    pizzas: [],
    editing: false,
    pizza: this.defaultPizza
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  fetchPizzas = () => {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pizzas: data
        })
      })

  }

  handleEditClick = (pizza) => {
    this.setState({ pizza, editing: true })

  }

  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({
        pizza: { ...this.state.pizza, topping: e.target.value }
      })
    } else if (e.target.type === 'select-one') {
      this.setState({
        pizza: { ...this.state.pizza, size: e.target.value }
      })
    } else {
      this.setState({
        pizza: { ...this.state.pizza, vegetarian: e.target.value === 'Vegetarian' }
      })
    }
  }

  handleSubmit = (event) => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizza.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.pizza)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ editing: false, pizza: this.defaultPizza })
        this.fetchPizzas()
      })

  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm pizza={this.state.pizza} editing={this.state.editing} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <PizzaList pizzas={this.state.pizzas} handleEditClick={this.handleEditClick} />
      </Fragment>
    );
  }
}

export default App;
