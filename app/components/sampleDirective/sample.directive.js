(function() {
  angular.module('neForce.directives.sample', [])
  .directive('sample', sampleDirective);

  // dependencies
  sampleDirective.$inject = [];

  function sampleDirective() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'sample.template.html',
      link: link
    };

    return directive

    function link(scope, element, attrs) {
      scope.message = 'SAMPLE DIRECTIVE';
    };
  };

})();
