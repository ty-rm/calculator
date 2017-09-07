import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngBootstrap from 'angular-ui-bootstrap';

import routing from './home.routes';
import HomeController from './home.controller';
import calculator from '../../services/calculator.service';
import button from '../../directives/button.directive';

export default angular
    .module('app.home', [
        uirouter,
        ngBootstrap,
        calculator,
        button
    ])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;
