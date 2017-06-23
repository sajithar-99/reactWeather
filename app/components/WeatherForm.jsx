var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();//prevent page refresh!
    var updates = {};
    var city = this.refs.city.value;

    if (city.length > 0) {
      this.refs.city.value = '';
      updates.city = city;

    } else {
      alert("B.A.D I.N.P.U.T");
    }

    this.props.onNewCity(updates);
  },
  render:function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="city" placeholder="City"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
