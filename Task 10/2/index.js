const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

    const newAnimal = {
        name: this.name,
        type: this.type,
        isDomestic: isDomestic,
        makeSound: this.makeSound
    };

    return newAnimal;
}

// Используем метод bind для объекта dog
const boundDomesticDog = makeDomestic.bind(dog, true);
boundDomesticDog();

// Используем метод call для объекта bird
const calledDomesticBird = makeDomestic.call(bird, false);

// Используем метод apply для объекта bird
const applyDomesticBird = makeDomestic.apply(bird, [true]);