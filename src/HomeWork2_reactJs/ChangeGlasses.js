import React, { Component } from "react";
import "./style.css";
import g1 from "../access/img/glassesImage/g1.jpg";
import g2 from "../access/img/glassesImage/g2.jpg";
import g3 from "../access/img/glassesImage/g3.jpg";
import g4 from "../access/img/glassesImage/g4.jpg";
import g5 from "../access/img/glassesImage/g5.jpg";
import g6 from "../access/img/glassesImage/g6.jpg";
import g7 from "../access/img/glassesImage/g7.jpg";
import g8 from "../access/img/glassesImage/g8.jpg";
import g9 from "../access/img/glassesImage/g9.jpg";
import v1 from "../access/img/glassesImage/v1.png";
import v2 from "../access/img/glassesImage/v2.png";
import v3 from "../access/img/glassesImage/v3.png";
import v4 from "../access/img/glassesImage/v4.png";
import v5 from "../access/img/glassesImage/v5.png";
import v6 from "../access/img/glassesImage/v6.png";
import v7 from "../access/img/glassesImage/v7.png";
import v8 from "../access/img/glassesImage/v8.png";
import v9 from "../access/img/glassesImage/v9.png";
import model from "../access/img/glassesImage/model.jpg";

export class ChangeGlasses extends Component {
  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      img: g1,
      imgTest: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      img: g2,
      imgTest: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      img: g3,
      imgTest: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      img: g4,
      imgTest: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      img: g5,
      imgTest: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      img: g6,
      imgTest: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      img: g7,
      imgTest: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      img: g8,
      imgTest: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      img: g9,
      imgTest: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glass: null,
    name: null,
    price: null,
    desc: null,
  };
  changeGlasses = (item) => {
    this.setState({
      glass: item.imgTest,
      name: item.name,
      price: item.price,
      desc: item.desc,
    });
  };
  renderGlasses = () => {
    return this.glasses.map((item) => {
      return (
        <div
          key={item.id}
          className="col-2 justify-content-center"
          onClick={() => this.changeGlasses(item)}
        >
          <img src={item.imgTest} className="w-100 " />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>TRY GLASSES APP ONLINE</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="dislay-4">Detail</h1>
              <p>Name:{this.state.name} </p>
              <p>Price:{this.state.price}$ </p>
              <p>Description:{this.state.desc} </p>
            </div>
            <div className="col-6">
              <div className="model">
                <img src={model} />
                <span className=" glasses">
                  <img src={this.state.glass} />
                </span>
              </div>
            </div>
          </div>
          <div className=" row align-items-center">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}

export default ChangeGlasses;
