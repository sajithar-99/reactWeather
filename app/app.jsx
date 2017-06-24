var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('Weather');
var Main = require('Main');
var About = require('About');
var Examples = require('Examples');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app.css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component = {About}/>
      <Route path='examples' component = {Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
