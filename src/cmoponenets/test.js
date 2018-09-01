import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add} from '../ducks/reducer';

class Test extends Component {
    render() {
        return (
            <div>
            {this.props.austin}
            <button onClick={this.props.add}>add</button>
            </div>
        );
    }
}


// create function where reducer state will be passed in, and the value from state are set to new properties
const mapStateToProps = state => {
    return {
        austin: state.num
    }
}

// create an object that holds the functions from our reducer
const mapDispatchToProps = {
    add: add
}

//pass in mapStateToProps and mapDispatchToProps to connect, invoke the invoked connect function and pass in your component (i.e Test);
export default connect(mapStateToProps, mapDispatchToProps)(Test);