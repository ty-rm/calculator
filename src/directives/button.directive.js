import angular from 'angular';

export default angular
    .module('button', [])
    .directive('button', button)
    .name;

button.$inject = ['calculatorService'];

function button(calculatorService) {
    return {
        restrict: 'E',
        scope: {
            value: '='
        },
        template: require('./button.html'),
        link: link
    };

    function link(scope) {
        scope.input = input;

        function input() {
            calculatorService.input(scope.value);
        }
    }
}
