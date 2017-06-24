var React = require('react');

/*
var About = React.createClass({
  render: function(){
  return(
    <h3> About-jsx-component</h3>
  );
  }
});
*/
var About = function(props) {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>A Basic Weather App using openWeatherMap API using ReactJS,NodeJS & Foundation 6.<br/><i> -sajithar99</i></p>
      <ol>
        <li>
          <a href="https://github.com/sajithar99/reactWeather.git">GitHub Repo</a>
          - GitHub Repository</li>

        <li>
          <a href="http://openweathermap.org/api">OpenWeatherMap API</a>
          - with Axios
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation 6</a>
          -Styled using Foundation 6 : CSS Framework
        </li>

      </ol>
    </div>
  );
}
module.exports = About;
