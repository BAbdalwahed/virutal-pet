const MAXIMUM_FITNESS = 10;
const minFitness = 0;
const fitnessDecr = 3 
const maxHunger = 10;
const minHunger = 0;
const hungerDecr = 3;
const maxAge = 30;
const minAge = 0;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.hunger = 0;

    Pet.prototype.growUp = function () {
        this.age += 1;
        this.hunger += hungerDecr;
        this.fitness -= fitnessDecr;
    }
    Pet.prototype.walk = function () {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    }
    Pet.prototype.feed = function () {
        if ((this.hunger -= hungerDecr) >= maxHunger) {
            this.hunger -= this.hunger;
        } else {
            this.hunger = minHunger
        }
    }
    Pet.prototype.checkUp = function () {
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        } else if ((this.fitness <= 3)) {
            return 'I need a walk';
        } else if (this.hunger >= 5) {
            return 'I am hungry';
        } else {
            return 'I feel great!';
        }
    }

}

module.exports = Pet;