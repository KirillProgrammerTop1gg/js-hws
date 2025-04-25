abstract class House {
    protected door: 'open' | 'close' = 'close';
    protected key: Key;
    protected tenants: Person[] = [];
    constructor (key:Key){
        this.key = key;
    }
    abstract openDoor(key:Key): void;
    comeIn(person:Person){
        if (this.door === 'open') {
            this.tenants.push(person);
            console.log('Людина потрапила до дому');
        }
        else {
            console.log('Щоб людина потрапила до дому, потрібен коректний ключ')
        }
    }
}
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()){
            this.door = 'open';
            console.log('Ключі підійшли, дверь відчинена');
        }
        else {
            this.door = 'close';
            console.log('Не коректний ключ')
        }
    }
}
class Key {
    private signature: number=0;
    constructor(){
        this.signature = Math.floor(Math.random() * 999999);
    }
    getSignature():number{
        return this.signature;
    }
}
class Person {
    private key: Key;
    constructor(key: Key){
        this.key = key;
    }
    getKey():Key{
        return this.key;
    }
}
const myKey = new Key();
const house = new MyHouse(myKey);
const resident = new Person(myKey);

house.openDoor(resident.getKey());
house.comeIn(resident);