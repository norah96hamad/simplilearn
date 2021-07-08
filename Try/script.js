const emp = new Map();

emp.set(101, 'Alex');
emp.set(102, 'Clark');
emp.set(103,'Patrick');

console.log(emp);

console.log(' Name of #102 is ', emp.get(102));

console.log('Is #105 exists??', emp.has(105));
emp.forEach((value,key) => {
    console.log(value,key);

});

emp.delete(103);
console.log(emp);
emp.clear();
console.log(emp);