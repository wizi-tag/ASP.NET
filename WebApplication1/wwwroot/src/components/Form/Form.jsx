import React, { Component } from 'react';
import {
    Form as NForm, FormGroup, Button, Input, Label,
    InputGroup, ButtonGroup
} from 'reactstrap';

import './Form.css';
        
        console.log("qqqqqqqqqqqqqqqqqqqq");
        
class Form extends Component {
    constructor(props) {
        super(props);

        const { data } = props;

        if (data.id) {
            this.state = {
                ...data
            }
        } else {
            this.state = {
                text: '',
                flag: true,
                id: 0
            }
        }
    }

    render() {
        const { text } = this.state;

        return (
            <div className="form">
                <NForm inline className="nform">
                    <InputGroup style={{ width: '100%' }}>
                        <Input type="text" name="text" id="text" placeholder="text" onChange={this.changeText} value={text} style={ {backgroundColor:'#E9ECEF'} } />
                        <ButtonGroup>
                            <Button onClick={this.ok}>Ok</Button>
                            <Button onClick={this.cancel}>Cancel</Button>
                        </ButtonGroup>
                    </InputGroup>
                </NForm >
            </div>
            
        );
    }

    cancel = () => {
        const { changeState } = this.props;

        changeState();
    }

    ok = () => {
        const { changeState, sendText, textCahange } = this.props;
        const { text, flag, id } = this.state;

        if (!id) {
            sendText(text);
        } else {
            textCahange(id, text);
        }

        changeState();
    }

    changeText = ({ target: { value } }) => {
        this.setState({ text: value})
    }
}

export default Form;