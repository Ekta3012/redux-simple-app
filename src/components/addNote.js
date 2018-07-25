import React, { Component } from 'react';
import { addNoteAction,deleteNoteAction } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button,FormControl } from 'react-bootstrap';

class AddnoteComponent extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }

    handleSubmit=()=>{
        this.props.addNoteAction(this.state.inputValue);

    }

    handleDelete=(key)=>{
        this.props.deleteNoteAction(key);
    }
    
    render() {
        return (
            <div className="AddnoteComponent">
                <label>
                    Add Note : &nbsp;
                </label>
                <FormControl type="text" name="note" onChange={this.handleChange}/>
                <Button onClick={this.handleSubmit} bsStyle="success">+</Button><br/>
                <ul className="list">
                    {
                        this.props.notes.map((x,index)=>{
                            return (
                                <li key={index}>{x}<Button onClick={()=>this.handleDelete(index)} bsStyle="danger">x</Button></li>
                            );
                        })
                    } 
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notes: state.note
})

const mapDispatchToProps = (dispatch) => ({
addNoteAction: bindActionCreators(addNoteAction, dispatch),
deleteNoteAction: bindActionCreators(deleteNoteAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddnoteComponent); 

