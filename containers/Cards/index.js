import React, { Component } from "react";
import CardsInfo from "../../components/Cards/Cards";



class Cards extends Component {
  render() {
   
    return (
      <div >
        <CardsInfo data-aos={this.props.aos} data-aos-offset={this.props.aos_offeset} />
      </div>

    )
  }
}

export default Cards;