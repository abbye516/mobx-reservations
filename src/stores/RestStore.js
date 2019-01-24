import { observable, computed, action } from 'mobx'

class Res {
    @observable name
    @observable id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)
    //giving a random short string ID
    @observable numPeople
    @observable completed = false
    constructor(name, numPeople) {
        this.name = name
        this.numPeople = numPeople
    }
}

class RestaurantStore {
    @observable reservations = []
    @observable numTables = 10
    @computed get totalReservations() {
        return this.reservations.length
    }
    @computed get openTables() { //automatically caluclates the number of tables avalible, only when the state is affected
        let counter = 0
        this.reservations.forEach(r => !r.completed ? counter++ : null)
        return (this.numTables - counter)
    }
    @computed get restPopulation() {
        let counter = 0
        this.reservations.forEach(r => !r.completed ? counter += r.numPeople : null)
        return counter
    }
    @computed get completedTables() {
        let counter = 0
        this.reservations.forEach(r => r.completed ? counter++ : null)
        return counter
    }
    @action addRes = (name, numPeople) => {
        this.reservations.push(new Res(name, numPeople))
    }
    @action completeRes = (id) => {
        let finishedRes = this.reservations.find(f => f.id === id)
        finishedRes.completed = true
        let index = this.reservations.indexOf(finishedRes)
        this.reservations.splice(index,1)
        //find the reservation and mark it as completed
        //after you write this function, add some conditional rendering on compelted tables
        //e.g. strike through our a different color - this will happen on your react, not here.
    }
}
const HaAchim = new RestaurantStore()
HaAchim.addRes("Bernard", 4)
// HaAchim.completeRes("Bernard")

export default HaAchim