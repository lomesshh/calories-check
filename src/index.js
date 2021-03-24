import React from "react";
import ReactDOM from "react-dom";
import calorieData from "./data/calorie-data";
import Tableitem from "./food-pill";

import "./styles.css";

function FoodClicked({ foodClicked }) {
  return <h1>Total calories Burn Today :{foodClicked}</h1>;
}

function Header({ heading }) {
  return <h1> {heading} </h1>;
}

function FoodTable({ calorieData, foodtableclick }) {
  return calorieData
    .slice(0, 10)
    .map(({ name, measure, calories }) => (
      <Tableitem
        name={name}
        measure={measure}
        calories={calories}
        onFoodTableClickHandler={foodtableclick}
      />
    ));
}

class App extends React.Component {
  state = {
    foodClicked: 0
  };

  foodtableclick = (calorie) => {
    this.setState({ foodClicked: calorie + this.state.foodClicked });
  };

  render() {
    return (
      <div className="App">
        <Header heading={"Welcome to Calories Counter"} />
        <FoodTable
          calorieData={calorieData}
          foodtableclick={this.foodtableclick}
        />
        <FoodClicked foodClicked={this.state.foodClicked} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
