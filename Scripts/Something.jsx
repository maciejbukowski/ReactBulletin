 var Badge = React.createClass({
     render: function() {
         return <button className="btn btn-primary" type="button">
           {this.props.title} <span className="badge">{this.props.number}</span>
         </button>
     }
 });

 var Thumbnail = React.createClass({
     render: function() {
         return <div className="col-sm-6 col-md-4">
           <div className="thumbnail">
             <img src={this.props.imageUrl} alt="..."></img>
             <div className="caption">
               <h3>{this.props.header}</h3>
               <p>{this.props.description}</p>
               <p>
                 <Badge title={this.props.title} number={this.props.number} />
               </p>
             </div>
           </div>
         </div>
     }
 });

 var options = {
     title: 'This button shall not be clicked',
     number: 0,
     header: 'Learn React',
     description: 'I cannot wait to become great about a Javascript templating framework, I have chosen ReactJS as my tool',
     imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
 };

 var element = React.createElement(Thumbnail, options);
 React.render(element, document.querySelector('.container'));