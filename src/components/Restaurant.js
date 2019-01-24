import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

@inject("GeneralStore", "RestaurantStore")

@observer
class Restaurant extends Component {
    addRes = () =>{
        let numberofPeople = parseInt(this.props.GeneralStore.numPeople)
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name, numberofPeople )
    }
    render() {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                {/* Add in # of people in restaurant */}
                <div>There are {this.props.RestaurantStore.restPopulation} people in the restaurant</div>
                {/* Add in # of completed tables */}
                <div>There are {this.props.RestaurantStore.completedTables} completed tables</div>
                <ResInput />
                <button onClick={this.addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                {/* Map reservation data to Reservation components here */}
                {this.props.RestaurantStore.reservations.map(res => {
                    return (<Reservation key={res.name} reservation ={res}/>
                    )
                })}
            </div>
        )
    }
}

export default Restaurant