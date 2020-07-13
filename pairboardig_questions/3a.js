// myMap
// Implement the Array.prototype.map function in JavaScript.

Array.prototype.myMap = function(cb){
    let newArr = []
    this.forEach(ele => {
        newArr.push(cb(ele))
    })
    return newArr;
}

console.log([1,2,3,4,5,6].myMap(el => el * 2));
console.log(['a', 'b', 'c'].myMap(el => el + '!'));
console.log([1,2,3,4,5,6].myMap(el => el - 1));



// Employees Query
// In a SQL db, you have two tables, an employees table and a departments table. 
// Employees belong to only one department. Write a SQL query that, given a 
// department name, finds all the employees in that department.

// SELECT employees.*
// FROM employees e
// JOIN departments d ON e.dept_id = d.id
// WHERE d.name = ?