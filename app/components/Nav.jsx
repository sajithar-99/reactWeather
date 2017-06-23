var React = require('react');
var {Link,IndexLink}= require('react-router');
//above line is equivalent to
//var Link = require('react-router').Link;
/*
var Nav = React.createClass({
  render: function(){
    return(
      <div>
      <h2> Navigation Bar</h2>
      <IndexLink to ="/" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to ="/About" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to = '/examples' activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
    </div>

    );
  }
}); */

var Nav = () =>
{
  return(
    <div>
    <h2> Navigation Bar</h2>
    <IndexLink to ="/" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
    <Link to ="/About" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>About</Link>
    <Link to = '/examples' activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
  </div>

  );
}
module.exports = Nav;
