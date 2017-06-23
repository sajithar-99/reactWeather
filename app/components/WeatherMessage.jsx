var React = require('react');
/*
var WeatherMessage = React.createClass({
  render: function(){
    var {temp,city}=this.props;//es6 destructuring
    return(
      <div>
        <h3>Its {temp} degress in {city}</h3>
      </div>
    );
  }
});
*/
/*
var WeatherMessage = (props) =>{
  var {temp,city}=props;//es6 destructuring
  return(
    <div>
      <h3>Its {temp} degress in {city}</h3>
    </div>
  );
}*/
var WeatherMessage = ({temp,city}) =>{
//es6 destructuring in arguments
  return(
    <div>
      <h3>Its {temp} degress in {city}</h3>
    </div>
  );
}
module.exports = WeatherMessage;
