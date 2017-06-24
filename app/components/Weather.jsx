var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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

    this.setState({
      isLoading:true,
      errorMessage:undefined
    });

    openWeatherMap.getTemp(loc).then(function(temp) {
      //  updates.city=city;
      updates.temp = temp;
      that.setState({isLoading:false});
      that.setState(updates);

    }, function(err) {
      that.setState({
        isLoading:false,
        errorMessage:err.message
      });
  //    alert('E.R.R.O.R : NO VALID RESPONSE'+ errorMessage);
});

    //    updates.temp = 23;
    //  alert(updates.city);
    //alert(updates.temp);
    //this.setState(updates);
  },
  render: function() {
  var {isLoading,temp, city,errorMessage} = this.state; //es6 destructuring

  function renderMessage()
   {
     if(isLoading){
       return <h3 className="text-center">Fetching....</h3>;
     }
   else if (temp && city) {
     return <WeatherMessage city={city} temp ={temp}/>;
   }
 }

function renderError(){
  if(typeof errorMessage === "string"){
    return(
      <ErrorModal message={errorMessage}/>
    );
  }
}

    return (
      <div>
         <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
        {renderError()}

      </div>

    );
  }
});

module.exports = Weather;
