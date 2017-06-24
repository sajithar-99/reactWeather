var React = require('react');
var {Link}= require('react-router');
/*var Examples = React.createClass({
  render:function(){
    return (
      <div>
      <h4>Examples-jsx-Component</h4></div>
    );
  }
});
*/
var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center page-title">Examples.</h1>
    <p>Example Locations to try</p>
    <ol>
     <li><Link to = "/?location=Cochin">Cochin</Link></li>
     <li><Link to = "/?location=Barcelona">Barcelona</Link></li>
     <li><Link to = "/?location=Moscow">Moscow</Link></li>
    </ol>
</div>
  );
};
module.exports = Examples;
