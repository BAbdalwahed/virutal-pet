const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  
    it('has a initial fitness of 10', () => {
      const pet = new Pet('Fido');
  
      expect(pet.fitness).toEqual(10);
    });
  
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
     
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is no alive', () => {
      const pet = new Pet('Fido');

      pet.fitness = 0;

      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('checkUp', () => {       
    it('if fitness is 3 or less return I need a walk', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is no alive', () => {
      const pet = new Pet('Fido');

      pet.fitness = 0;
      pet.hunger = 10;

    expect(()=> pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });

  });
  
  describe('feed', () => {
    it('throws an error if the pet is no alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
      expect(()=> pet.feed()).toThrow('Your pet is no longer alive :(');
      });
  });

  /*describe('adoptChild', () => {
    xit('Pet can have a baby', () => {
      const parent = new Pet('Fido');

      expect(pet.adoptChild(child)).toBe(['Rex']);
    })
  });*/

  describe('adoptChild', () => {

    const parent = new Pet('Fido');

    it('adopt a child', () => {
        parent.adoptChild(new Pet('Rex'));

        expect(parent.children).toEqual([
             { name: 'Rex', age: 0, hunger: 0, fitness: 10, children: [] } 
        ]);
    });
  });
  
  describe('feedChild', () => {

    expect(parent.children[0].feed()).toBeTruthy(child.feed);
  });