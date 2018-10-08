class Person{
  constructor(name = "Anon", age = 0){
    this.name = name;
    this.age = age;
  }

  getName(){
    return this.name;
  }

  getDescription(){
    return `Hi I'm ${this.name} and I am ${this.age}`;
  }
}

class Student extends Person {
  constructor(name = "Anon", age = 0, major){
    super(name, age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let desc = super.getDescription();
    if(this.hasMajor()){
      desc += `. I am majoring in ${this.major}. `;
    }
    return desc;
  }
};

class Traveler extends Person {
  constructor(name = "Anon", age = 0, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getDescription(){
    let ret = super.getDescription();
    if(this.hasHomeLocation()){
      ret += `. I am From ${this.homeLocation}`;
    }
    return ret;
  }
};

const me = new Student("Ryan", 22, "Computer Science");
console.log(me.hasMajor());
console.log(me.getDescription());

const you = new Student("Gel", 20, "Math Nigga");
console.log(you.getDescription());

const him = new Traveler("Kevin", 24, "Kenya");
console.log(him.getDescription());
