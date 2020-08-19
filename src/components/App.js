import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import editMarkdown from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/style.css';

class App extends Component {
    
    render() {
        return (
            <div>
                <div className="split left">
                    <div className="centered">
                        <form>
                            <label for="editor">Editor</label>
                            <textarea id="editor" name="editorMsg" rows="40" cols="100">
                                {this.props.message}
                            </textarea>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>

                <div className="split right">
                    <div className="centered">
                        <form>
                            <label for="preview">Preview</label>
                            <textarea id="preview" name="previewMsg" rows="40" cols="100" readonly>
                                {this.props.message}
                            </textarea>
                            <input type="submit"></input>
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