class School {
    /**
     *@param{string} name
     *@param{string} level : 'primary'|| 'middle' ||'high'
     *@param{number} numberOfStudents
     */
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name
    }
    get level() {
        return this._level
    }
    get numberOfStudents() {
        return this._numberOfStudents
    }
    set numberOfStudents(newNumberOfStudents) {
        if ((typeof newNumberOfStudents) === "number") this._numberOfStudents = newNumberOfStudents;
        else console.log("Invalid input: numberOfStudents must be set to a Number.")
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    /**
     * 
     * @param {array} substituteTeachers
     * @return {string}
     */
    static pickSubstituteTeacher(substituteTeachers) {

        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]

    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        const level = "primary";
        super(name, level, numberOfStudents, pickupPolicy);
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy() {
        return this._pickupPolicy
    }
}

//Create a middle school class
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        const level = "middle";
        super(name, level, numberOfStudents);
    }
}

class HighSchool extends School {
    /**
     * @param{array} sportsTeams: array of strings
     */
    constructor(name, numberOfStudents, sportsTeams) {
        const level = "high";
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
        return console.log(this._sportsTeams.join(", ")), this._sportsTeams

    }
}


//Create a PrimarySchool instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,
    'Students must be picked up by a parent, guardian, ' +
    'or a family member over the age of 13.');

//Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();

//The principal of Lorraine Hansbury needs a substitute teacher for the day.
const substituteTeacher = School.pickSubstituteTeacher(['Jamal Crawford',
    'Lou Williams', 'J. R. Smith',
    'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(`${lorraineHansbury.name} substitute teacher for today is ${substituteTeacher}`)

//Create a HighSchool instance 
const alSmith = new HighSchool('Al E. Smith', 415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);


//Get the value saved to the sportsTeams property in alSmith
console.log();
alSmith.quickFacts();
console.log(alSmith.name + " sports teams:");
alSmith.sportsTeams


//Create a class called SchoolCatalog that holds a collection of schools
class SchoolCatalog{
    constructor(level){
        this._level=level
        this._schools=[];
    }
    get level(){
        return this._level
    }
    get schoolnames(){
        let names="";
        const lastIndex=this.schoolnames.length-1;
       return this.schools.reduce((names,school,i)=>{
          return  names+=((i!==lastIndex) ? (school.name+', '):school)
        },names)
    }

    addSchool(school){
     if(school.level===this.level)this._schools.push(school)
     else console.log("wrong school catalogue")
    }
}
