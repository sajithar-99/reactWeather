var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return{
      isLoading:false
    };
    //return {city: 'Miami', temp: 101}; //AN OBJECT IS BEING RETURNED MIND THE {}
  },
  handleNewCity: function(updates) {
    var that = this;
    var loc = updates.city;
    
    this.setState({isLoading:true});

    openWeatherMap.getTemp(loc).then(function(temp) {
      //  updates.city=city;
      updates.temp = temp;
      that.setState({isLoading:false});
      that.setState(updates);

    }, function(errorMessage) {
      that.setState({isLoading:false});
      alert('E.R.R.O.R : NO VALID RESPONSE'+ errorMessage);
    })

    //    updates.temp = 23;
    //  alert(updates.city);
    //alert(updates.temp);
    //this.setState(updates);
  },
  render: function() {
  var {isLoading,temp, city} = this.state; //es6 destructuring

  function renderMessage()
   {
     if(isLoading){
       return <h3>Fetching....</h3>;
     }
   else if (temp && city) {
     return <WeatherMessage city={city} temp ={temp}/>;
   }
 }

    return (
      <div>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
        //
        <h3>
          Weather-jsx-component</h3>
      </div>

    );
  }
});

module.exports = Weather;
