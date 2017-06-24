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

//var Nav = () =>
//{
//  return(
//    <div className="top-bar">
//     <div className="top-bar-left">
//        <ul className = "menu">
//          <li className = "menu-text">ReactJS Weather App</li>
//          <li><IndexLink to ="/" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
//        <li><Link to ="/About" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>About</Link></li>
//        <li><Link to = '/examples' activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
//    </ul>
//     </div>
//     <div className = "top-bar-right">
//     <form onSubmit={this.onSearch}>
//     </form></div>
//    </div>

//);
//}

var Nav =React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var search = this.refs.search.value;
    var encodedSearch = encodeURIComponent(search);
    if(search.length>0){
      this.refs.search.value ='';
      window.location.hash="#/?location="+encodedSearch;
    }
 //alert("Not Wired!" + search);
  },
  render: function(){
    return(
      <div className="top-bar">
       <div className="top-bar-left">
          <ul className = "menu">
            <li className = "menu-text">ReactJS Weather App</li>
            <li><IndexLink to ="/" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
            <li><Link to ="/About" activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li><Link to = '/examples' activeClassName = 'active' activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
        </ul>
       </div>
       <div className = "top-bar-right">
       <form onSubmit={this.onSearch}>
         <ul className="menu">
          <li>
          <input type = "search" ref = "search" placeholder ="Enter City"/>
          </li>
          <li>
          <input type="submit" className="button" value="Get Weather"/></li>
         </ul>
       </form></div>
      </div>


    );
  }
});

module.exports = Nav;
