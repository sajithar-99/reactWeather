var React = require('react');
var ReactDOM= require('react-dom');
var ReactDOMServer = require('react-dom/server');
var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {title: 'Ooops!'}
  },
  componentDidMount: function() {
    var {title, message} = this.props;
    var modalMarkup = (

      <div className="reveal" id="error-modal" data-reveal="" data-close-on-click="true" data-animation-in="spin-in" data-animation-out="spin-out">
        <h4>{title}</h4>
        <p>Apologies...Something went wrong</p>
        <p>errorMessage:{message}</p>
        <button className="button hollow warning" data-close="">
      <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex="1" title="If non-responsive,Click anywhere outside this window to close.">Okay</span>:)
        </button>


      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {

    return (
      <div></div>
    );

  }
});

module.exports = ErrorModal;
