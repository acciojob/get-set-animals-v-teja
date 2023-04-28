//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get getSpecies{
	return this.species;
	}
	function makeSound{
		console.log("Animal sound");
	}
}

class Dog extends Animal {
	constructor(){
		super(dog);
	}
	function bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(){
		super(cat);
	}
	function purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
