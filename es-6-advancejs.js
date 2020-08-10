/*************************************************************************
* Default Parameter 
*/

//Adding two number
/*function add (num1, num2 = 20) {
    num2 = num2 || 0;
    const sum = num1 +num2;
    return sum;
}
let summation = add (25);
console.log(summation);*/

//Multiply two number
/*function Multiply (a, b) {
    b = b!== 'undefined' 
    return a*b;
}
const twoNumberMultiply = Multiply (5, 5);
console.log(twoNumberMultiply);
const defaultParamerter = Multiply (4);
console.log(defaultParamerter);*/

//Earlier parameter are available to later default parameter
/*function greet ( name, greeting, message = greeting + ' ' + name){
    return [ name, greeting, message];
}
const welcome = greet('Shohag', 'Hi', 'Happy birthday');
console.log(welcome);*/

/*************************************************************************************
*Template of ES-6 
*/

//Template literal
/*const product1 = 'Shirt';
const price1 = 450;
const product2 = 'Pant';
const price2 = 350;

html =`
    <ul>
        <li> Item : ${product1} </li>
        <li> price : ${price1} </li>
        <li> Item : ${product2} </li>
        <li> price : ${price2} </li>
        <li> total : ${price1 + price2} </li>
    </ul>
`; 
const list = document.querySelector('#list');
list.innerHTML = html;
const listF = document.getnumberById('list');
listF.style.fontSize = '50px';
listF.style.textAlign = 'center';*/

//Template using
/*const firstName = 'Sheikh';
const lastName = 'Shohag';
const fullName = `${firstName} ${lastName}`
console.log(fullName);*/

/*************************************************************************************
 * Arrow function declaring
 */

//Adding two number
 /*function add (num1, num2) {
     return num1 + num2;
 }
 const result = add (25, 35);
 console.log(result);*/

 //Arrow function 
 /*const addition = (num1, num2) => num1 + num2;
 const sum = add(35, 70);
 console.log(sum);*/

 //Arrow function by expression method
 /*const age = prompt('What is your age?', 18)
 const welcome = (age < 18) ? 
 () => alert('hello') : 
 () => alert('wow');
 welcome();/*/

 /**********************************************************
  * Three dots
  */

  //To combine multiple array in one array 
  /*const age1 = [25, 35, 14, 12, 18, 17];
  const age2 = [12, 13, 14, 15, 18,];
  const name = ['nabila', 'kabila', 'sofia', 'rinki', 'tusi', 'jamela'];
  const allNameAge = [...age1, ...name, ...age2];
  console.log(allNameAge);*/

//Find maximum value by three dots
/*const hasina = 250;
const jorina = 350;
const maleka = 300;
const maxTaka = [hasina, jorina, maleka];
const maximum = Math.max(...maxTaka);
console.log(maximum);*/

/************************************************************
 * Class
 */
 
 //Making an object by using class
 /*class student {
    constructor(studentId, studentName){
        this.id= studentId ;
        this.name= studentName;
        this.versity = 'IUBAT'
        this.place = 'Uttara, sector-10'
    }
 }
 const student1 = new student (1510, 'Shohag');
 const student2 = new student (1511, 'Biplop');
 const student3 = new student (1512, 'Mahin');
 const student4 = new student (1513, 'sobuj');
 const student5 = new student (1514, 'Salam');
 const student6 = new student (1515, 'Kakuli');
 const student7 = new student (1516, 'koli');
 const student8 = new student (1520, 'Samim');
 const student9 = new student (1545, 'Swadhin');
 console.log(student1, student2, student3, student4, student5);
 console.log(student6, student7, student8, student9);*/

 //Make an object by class
 /*class shopping {
     constructor(productName, productPrice, buyingPlace){
         this.product = productName;
         this.price = productPrice;
         this.place = buyingPlace;
         this.with = 'Mr and Misses'; 
     }
 }
 const product1 = new shopping('Shirt', 750, 'uttara');
 const product2 = new shopping('Books', 1050, 'khilkhet');
 const product3 = new shopping('Shoe', 1850, 'Basundhara');
 const product4 = new shopping('Cosmetics', 2050, 'ifel tower');
 const product5 = new shopping('Three pice', 3500, 'Mukta plaza');
 const product6 = new shopping('Sweets', 300, 'sirajganj');
 const product7 = new shopping('T-shirt', 1250, 'New market');
 console.log(product1);
 console.log(product2);
 console.log(product3);
 console.log(product4);
 console.log(product5);
 console.log(product6);
 console.log(product7);*/

 /*************************************************************
  * Inheritance is use to joining two different class together
  */

  //A simple class 
  /*class child {
      constructor(){
        this.name = 'koli';
      }
  }
const baby = new child();
console.log(baby);*/

//Two class different position
/*class parent {
    constructor(){
        this.fatherName = 'Bahadur Ali'
        this.motherName = 'Mst.Morzina Begum'
    }
}
class child extends parent {
    constructor(name, age){
        super();
        this.name = name;
        this.age = age + ' Years Olds';
        this.Home = 'Charpara, Raiganj, Shirajganj, Bangladesh';
    }
}
const baby1 = new child ('Shohag',26);
const baby2 = new child ('Shima', 22);
const baby3 = new child ('Rima', 13);
console.log(baby1, baby2, baby3);*/

//Another Example of different class together
/*class bio {
    constructor(){
        this.District = 'Shirajgaj';
        this.Thana = 'Raiganj';
        this.fatherName = 'Md. Bellal Hossen';
        this.motherName = 'Mst. Shilpi Khatun';
    }
}
class daughter extends bio {
    constructor(name, vill){
        super();
        this.name = name;
        this.village = vill;
    }
}
const girl = new daughter ('Moutusi Islam', 'charpara');
const boy = new daughter ('Protik', 'Charpara');
console.log(girl, boy);*/

/********************************************************************
 * De structure
 */
//Finding three number from array
/*const person = {
    name: 'Swadhin',
    civilStatus: 'unmarred',
    designation: 'Engineer',
    home: 'Magura',
    currentAddress: 'Kummilla',
    friends:['Santo', 'Shohag', 'Shamim', 'Sajidul'],
    cgpa:3.75
};
const civilStatus = person.civilStatus;
const designation = person.designation;
const name = person.name;
const friends = person.friends[1];
console.log('His name is '+ name, 'civil Status is ' +civilStatus, 'he is a  '+ designation, 'his nearest friend is ' +friends);*/

//Another way of finding number from array or object
/*const school ={
    name: 'Charpara High School',
    place: 'Charpara, raiganj, Sirajganj',
    headMistress: 'Shilpi Khatun',
    students: 400,
    teachers: ['Al-amin', 'torikul', 'Hannan', 'Silpi', 'Hafijur Rahman']
};
const teachers = school.teachers[1];
const { name, headMistress} = school;
console.log(name, headMistress, teachers);*/

/**********************Advance Javascript****************** */

/*************************************************************
 * Advance javascript true false
 */

 //True false or falsy value
 /*const age  = 0;
 if (age) {
     console.log('This condition is true');
 }else{
     console.log('This condition is false');
 }

 //Another example
 const name = '';
 if (name.length) {
     console.log('this condition is true');
 }else{
     console.log('this condition is false');
 }*/

 /************************************************************
  * Undefined and null
  */
 
  //Undefined 
  /*const name = undefined;
  if(name) {
      console.log('This condition is true');
  }else{
      console.log('This condition is false');
  }*/

  //Function undefined
  //if we don't pass parameter and value equal then it should be undefined also undefined when we don't return the value
  /*function BMI ( weight, height) {
      const Bmi = weight/ (height*height);
      return Bmi;
  }
  const totalBmi = BMI(65,2.5);
  console.log('His BMI is: ' +totalBmi);*/

  /**********************************************************
   * Double equal and triple equal
   */
  
   // == equal is not check the string type but strict comparison === is also check the string type
  /*const age = '26';
  if(age === 26) {
      console.log(alert('This is the same'));
  }else{
      console.log(alert('This is not same.!'));
  }*/

  /*********************************************************
   * Map filter 
   */

   //Map
   /*const number = [1,2,3,6,4,6,4,8];
   const result = number.map(x=>x*x);
   console.log(result);*/

   //Filter
   /*const numeral = [1,2,3,5,58,8];
   const result = numeral.filter( x=> x>5);
   console.log(result);*/

   /******************************************************
    * Map on object property
    */
   /*const students = [
       {id: 1510, name:'shohag'},
       {id:1565, name: 'swadhin'}
   ];
   const name = students.map(s=>s.name);
   const id = students.map(s=>s.id);
   const full = name + ' ' +id;
   console.log(full);*/

   /*******************************************************
    * Closure 
    */
   /*function stopWatch(){
       let count = 0;
       return function(){
           count++;
           return count;
       }
   }
   const clock1 = stopWatch();
   const clock2 = stopWatch();
   console.log(clock1());
   console.log(clock1());
   console.log(clock1());
   console.log(clock1());

   console.log(clock2());
   console.log(clock2());
   console.log(clock2());
   console.log(clock2());

   console.log(clock1());*/


 /******************************************************
 * Slice splice join
 */   
 
 //slice
 /*const number = [1,2,5,8,6,5,4,8,5,6,4,8];
 const result = number.slice(2, 9);
 console.log(result); */

 //Splice 
 /*const digit = [5,6,5,8,7,5,8,6,5,78,5,6,8,5,4];
 const value = digit.splice(2, 6);
 console.log(value);*/

 //Join
 /*const product = ['shari', 'jama', 'powder', 'snow', 'ball'];
 const together = product.join(" 😀 ");
 console.log(together);*/


 

 /*****************************************END********************************************/


































