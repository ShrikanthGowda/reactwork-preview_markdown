import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import editMarkdown from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/style.css';

class App extends Component {

    constructor() {
        super();
        this.hendleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleClick = (e) => {
        e.preventDefault();
        this.props.editMarkdown(document.getElementById("editor").value);
    }

    handleChange = (event) => {
        this.props.editMarkdown(event.target.value);
    }
    
    render() {
        return (
            <div>
                <div className="split left">
                        <form>
                            <div className="centered">
                                <textarea id="editor" value={this.props.message}
                                onChange={this.handleChange} rows="40" cols="100" />
                                <div className="centeredSubmit">
                                    <input type="submit" onClick={this.handleClick}/>
                                </div>
                            </div>
                        </form>
                </div>

                <div className="split right">
                    <div className="centered">
                        <form>
                            <textarea id="preview" name="previewMsg" value={this.props.message} rows="40" cols="100" readOnly />
                        </form>
                    </div>
                </div>
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