import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import editMarkdown from '../actions';
import { connect } from 'react-redux';

class App extends Component {
    
    render() {
        return (
            <div>
                <h1>{ this.props.message }</h1>
            </div>          
        );
    }
}

const mapStateToProps = state => ({
    message: state.markdown.message,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        editMarkdown,
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);