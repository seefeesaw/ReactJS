// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h3>Array: {this.props.propArray}</h3>
//             <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
//             <h3>Func: {this.props.propFunc(3)}</h3>
//             <h3>Number: {this.props.propNumber}</h3>
//             <h3>String: {this.props.propString}</h3>
//             <h3>Object: {this.props.propObject.objectName1}</h3>
//             <h3>Object: {this.props.propObject.objectName2}</h3>
//             <h3>Object: {this.props.propObject.objectName3}</h3>
//          </div>
//       );
//    }
// }

// // App.propTypes = {
// //    propBool: React.PropTypes.bool.isRequired,
// //    propFunc: React.PropTypes.func,
// //    propNumber: React.PropTypes.number,
// //    propString: React.PropTypes.string,
// //    propObject: React.PropTypes.object
// // }

// App.defaultProps = {
//    propArray: [1,2,3,4,5],
//    propBool: true,
//    propFunc: function(e){return e},
//    propNumber: 1,
//    propString: "String value...",
   
//    propObject: {
//       objectName1:"objectValue1",
//       objectName2: "objectValue2",
//       objectName3: "objectValue3"
//    }
// }
// export default App;

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
		
//       this.state = {
//          data: []
//       }
	
//       this.setStateHandler = this.setStateHandler.bind(this);
//    };
//    setStateHandler() {
//       var item = "setState..."
//       var myArray = this.state.data.slice();
// 	  myArray.push(item);
//       this.setState({data: myArray})
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setStateHandler}>SET STATE</button>
//             <h4>State Array: {this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//    };
//    forceUpdateHandler() {
//       this.forceUpdate();
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
//             <h4>Random number: {Math.random()}</h4>
//          </div>
//       );
//    }
// }
// export default App;


// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//    };
//    findDomNodeHandler() {
//       var myDiv = document.getElementById('myDiv');
//       ReactDOM.findDOMNode(myDiv).style.color = 'green';
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
//             <div id = "myDiv">NODE</div>
//          </div>
//       );
//    }
// }
// export default App;


// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//    };
//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    componentWillMount() {
//       console.log('Component WILL MOUNT!')
//    }
//    componentDidMount() {
//       console.log('Component DID MOUNT!')
//    }
//    componentWillReceiveProps(newProps) {    
//       console.log('Component WILL RECIEVE PROPS!')
//    }
//    shouldComponentUpdate(newProps, newState) {
//       return true;
//    }
//    componentWillUpdate(nextProps, nextState) {
//       console.log('Component WILL UPDATE!');
//    }
//    componentDidUpdate(prevProps, prevState) {
//       console.log('Component DID UPDATE!')
//    }
//    componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//    }
//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }
// export default App;



// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.state.data} 
//                onChange = {this.updateState} />
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;



// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <Content myDataProp = {this.state.data} 
//                updateStateProp = {this.updateState}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.props.myDataProp} 
//                onChange = {this.props.updateStateProp} />
//             <h3>{this.props.myDataProp}</h3>
//          </div>
//       );
//    }
// }
// export default App;


// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState() {
//       this.setState({data: 'Data updated...'})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.updateState}>CLICK</button>
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;


// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState() {
//       this.setState({data: 'Data updated from the child component...'})
//    }
//    render() {
//       return (
//          <div>
//             <Content myDataProp = {this.state.data} 
//                updateStateProp = {this.updateState}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <button onClick = {this.props.updateStateProp}>CLICK</button>
//             <h3>{this.props.myDataProp}</h3>
//          </div>
//       );
//    }
// }
// export default App;


// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          data: ''
//       }
//       this.updateState = this.updateState.bind(this);
//       this.clearInput = this.clearInput.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    clearInput() {
//       this.setState({data: ''});
//       ReactDOM.findDOMNode(this.refs.myInput).focus();
//    }
//    render() {
//       return (
//          <div>
//             <input value = {this.state.data} onChange = {this.updateState} 
//                ref = "myInput"></input>
//             <button onClick = {this.clearInput}>CLEAR</button>
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;



// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
		
//       this.state = {
//          data:[
//             {
//                component: 'First...',
//                id: 1
//             },
//             {
//                component: 'Second...',
//                id: 2
//             },
//             {
//                component: 'Third...',
//                id: 3
//             }
//          ]
//       }
//    }
//    render() {
//       return (
//          <div>
//             <div>
//                {this.state.data.map((dynamicComponent, i) => <Content 
//                   key = {i} componentData = {dynamicComponent}/>)}
//             </div>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <div>{this.props.componentData.component}</div>
//             <div>{this.props.componentData.id}</div>
//             <div>{this.props.key}</div>
//          </div>
//       );
//    }
// }
// export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul>
//             {this.props.children}
//          </div>
//       )
//    }
// }
// export default App;

// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home...</h1>
//          </div>
//       )
//    }
// }
// export default Home;

// class About extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>About...</h1>
//          </div>
//       )
//    }
// }
// export default About;

// class Contact extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Contact...</h1>
//          </div>
//       )
//    }
// }
// export default Contact;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul>
//             {this.props.children}
//          </div>
//       )
//    }
// }
// export default App;

// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home...</h1>
//          </div>
//       )
//    }
// }
// export default Home;

// class About extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>About...</h1>
//          </div>
//       )
//    }
// }
// export default About;

// class Contact extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Contact...</h1>
//          </div>
//       )
//    }
// }
// export default Contact;


// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Header/>
//             <Content/>
//          </div>
//       );
//    }
// }
// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text!!!</p>
//          </div>
//       );
//    }
// }
// export default App;

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from './actions/actions'

// import AddTodo from './components/AddTodo.js'
// import TodoList from './components/TodoList.js'

// class App extends Component {
//    render() {
//       const { dispatch, visibleTodos } = this.props
      
//       return (
//          <div>
//             <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
//             <TodoList todos = {visibleTodos}/>
//          </div>
//       )
//    }
// }
// function select(state) {
//    return {
//       visibleTodos: state.todos
//    }
// }
// export default connect(select)(App);

// import React from 'react';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <ReactCSSTransitionGroup transitionName = "example"
//                transitionAppear = {true} transitionAppearTimeout = {500}
//                transitionEnter = {false} transitionLeave = {false}>
					
//                <h1>My Element...</h1>
//             </ReactCSSTransitionGroup>
//          </div>      
//       );
//    }
// }
// export default App;

// import React from 'react';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
//       }
//       this.handleAdd = this.handleAdd.bind(this);
//    };
//    handleAdd() {
//       var newItems = this.state.items.concat([prompt('Create New Item')]);
//       this.setState({items: newItems});
//    }
//    handleRemove(i) {
//       var newItems = this.state.items.slice();
//       newItems.splice(i, 1);
//       this.setState({items: newItems});
//    }
//    render() {
//       var items = this.state.items.map(function(item, i) {
//          return (
//             <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
//                {item}
//             </div>
//          );
//       }.bind(this));
      
//       return (
//          <div>      
//             <button onClick = {this.handleAdd}>Add Item</button>
				
//             <ReactCSSTransitionGroup transitionName = "example" 
//                transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
//                {items}
//             </ReactCSSTransitionGroup>
//          </div>
//       );
//    }
// }
// export default App;

import React from 'react';

var newData = {
   data: 'Data from HOC...',
}

var MyHOC = ComposedComponent => class extends React.Component {
   componentDidMount() {
      this.setState({
         data: newData.data
      });
   }
   render() {
      return <ComposedComponent {...this.props} {...this.state} />;
   }
};
class MyComponent extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.data}</h1>
         </div>
      )
   }
}

export default MyHOC(MyComponent);