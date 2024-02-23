//Write a code to Remove the spaces found in a string
const spaceRemove = (str) => 
{
    return str.split(' ').join(''); 
};

let str='Rutik Raju Rahangdale';
console.log(spaceRemove(str));