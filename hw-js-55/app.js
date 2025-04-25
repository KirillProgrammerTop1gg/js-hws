"use strict";
class House {
    constructor(key) {
        this.door = 'close';
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (this.door === 'open') {
            this.tenants.push(person);
            console.log('Людина потрапила до дому');
        }
        else {
            console.log('Щоб людина потрапила до дому, потрібен коректний ключ');
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = 'open';
            console.log('Ключі підійшли, дверь відчинена');
        }
        else {
            this.door = 'close';
            console.log('Не коректний ключ');
        }
    }
}
class Key {
    constructor() {
        this.signature = 0;
        this.signature = Math.floor(Math.random() * 999999);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
const myKey = new Key();
const house = new MyHouse(myKey);
const resident = new Person(myKey);
house.openDoor(resident.getKey());
house.comeIn(resident);
