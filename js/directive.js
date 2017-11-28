angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',    // EA -> attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});
