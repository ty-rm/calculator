import angular from 'angular';

export default angular
    .module('calculatorService', [])
    .service('calculatorService', calculatorService)
    .name;

calculatorService.$inject = [];

function calculatorService() {
    const self = this;

    self.input = input;

    function input(value) {
        console.log(value);
    }
}
