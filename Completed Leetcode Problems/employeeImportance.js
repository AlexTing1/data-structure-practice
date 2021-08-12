var GetImportance = function(employees, id) {
  //  find id of person
  var trackerObj = {};

  for (var i = 0; i < employees.length; i++) {
      var currentEmployee = employees[i];
      trackerObj[currentEmployee.id] = [currentEmployee.importance, currentEmployee.subordinates];
  }


  var importanceCount = 0;

  var helper = function(boss) {

      var importance = trackerObj[boss][0];
      var subordinates = trackerObj[boss][1];
      importanceCount += importance;
      if (subordinates.length === 0) {
          return;
      }
      for (var i = 0; i < subordinates.length; i++) {

          helper(subordinates[i]);
      }
  }

  helper(id);

  return importanceCount;


};