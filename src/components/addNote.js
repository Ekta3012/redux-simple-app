import React, { Component } from 'react';
import { addNoteAction } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AddnoteComponent extends Component {
    constructor(props){
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }

    handleSubmit=()=>{
        this.props.addNoteAction(this.state.inputValue);
    }
    render() {
        return (
            <div className="AddnoteComponent">
                <label>
                    Add Note : &nbsp;
                </label>
                <input type="text" name="note" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>+</button>
                {this.props.notes.join(',')}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notes: state.note
})

const mapDispatchToProps = (dispatch) => ({
addNoteAction: bindActionCreators(addNoteAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(AddnoteComponent); 

