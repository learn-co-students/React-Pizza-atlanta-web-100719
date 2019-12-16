import React from "react"

const PizzaForm = (props) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input onChange={props.handleChange} type="text" className="form-control" disabled={!props.editing} placeholder="Pizza Topping" value={
          //Pizza Topping Should Go Here
          props.pizza.topping
        } />
      </div>
      <div className="col">
        <select onChange={props.handleChange} value={props.pizza.size} className="form-control" disabled={!props.editing}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input onChange={props.handleChange} className="form-check-input" type="radio" value="Vegetarian" disabled={!props.editing} checked={props.pizza.vegetarian} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input onChange={props.handleChange} className="form-check-input" type="radio" value="Not Vegetarian" disabled={!props.editing} checked={!props.pizza.vegetarian} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" disabled={!props.editing} className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
      </div>
    </div>

  )
}

export default PizzaForm
