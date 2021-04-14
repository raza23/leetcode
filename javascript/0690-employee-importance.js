/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 *     this.hi = 'hi'
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = function(employees, id) {
  const ht = {};
  for (const employee of employees) {
    ht[employee.id] = employee;
  }

  const helper = function(employee) {
    let subImp = 0;
    for (const subId of employee.subordinates) {
      const subEmp = ht[subId];
      subImp += helper(subEmp);
    }
    return subImp + employee.importance;
  };

  const rootEmp = ht[id];
  return helper(rootEmp);
};
