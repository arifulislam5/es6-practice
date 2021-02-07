class Parent{
    constructor(){
        this.fatrherName = "Schwerznegger";
    }
}
class Child extends Parent{

        constructor(name){
            super();
            this.name =name;

        }
        getFullName(){
            return this.name+ " "+this.fatrherName;
        }

}
const baby =new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());