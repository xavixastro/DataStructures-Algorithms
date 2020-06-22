class Cat {
    constructor(name, owner){
        this.name = name;
        this.owner = owner;
    }

    cuteStatement(){
        return `${this.owner} loves ${this.name}`
    }

    meow(){
        return 'meeeeooooowwwwww';
    }
}