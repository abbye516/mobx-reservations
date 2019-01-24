import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { throws } from 'assert';

@inject("RestaurantStore")
class Reservation extends Component {
    completeRes = (e) =>{
        this.props.RestaurantStore.completeRes(e.target.value)
    }
    render() {
        return (
            <div>
                {this.props.reservation.name} for {this.props.reservation.numPeople} people
                <button value={this.props.reservation.id} onClick={this.completeRes} > Reservation Completed</button>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
        )
    }
}

export default Reservation