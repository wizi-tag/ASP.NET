import React, { Component } from 'react';
import {
    Card, CardBody, InputGroup,
    InputGroupAddon, InputGroupText, Input, ButtonGroup, Button
} from 'reactstrap';
import axios from 'axios';

import Form from './components/Form';

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            resp: [],
            actionForm: false,
            formData: {
                text: '',
                id: 0,
                flag: true
            }
        };

        this.getTasks()
    }

    render() {
        const { resp, actionForm, formData } = this.state;


        return (
            <div style={{ width: '30vw', margin: 'auto' }}>
                {
                    resp.map((item, key) =>
                        <Card style={{ marginTop: '20px' }} key={key}>
                            <CardBody>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="checkbox"
                                                aria-label="Active/Disactive"
                                                checked={item.flag}
                                                onChange={e => this.flagCahange(item.id)} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder={item.text} disabled />
                                    <ButtonGroup>
                                        <Button onClick={() => this.edit(item.id)}>Edit</Button>
                                        <Button onClick={() => this.delTask(item.id)}>Delete</Button>
                                    </ButtonGroup>
                                </InputGroup>
                            </CardBody>
                        </Card>
                    )
                }
                <Button
                    color="secondary"
                    size="lg"
                    block
                    style={{ marginTop: '30px' }}
                    onClick={this.changeStateForm}
                >Add new task</Button>

                {!actionForm ? null :
                    <Form
                        changeState={this.changeStateForm}
                        sendText={this.addTask}
                        textCahange={this.textCahange}
                        data={formData}
                        style={{ width: '30vw', margin: 'auto' }}
                    ></Form>}
            </div>
            );
    }

    PORT = 44312

    changeStateForm = () => this.setState((prevstate) => ({ ...prevstate, actionForm: !prevstate.actionForm, formData: {id: 0, text: '', flag: true} }))

     addTask = text => {
         axios.post(`https://localhost:${this.PORT}/api/values/add?text=${text}`)
             .then(({ data }) => {
                 this.setState({resp: data})
             })
             .catch(error => {
                 alert(error);
             })
    }

    getTasks = () => {
        axios.get(`https://localhost:${this.PORT}/api/values/getlist`)
            .then(({ data }) => {
                this.setState({ resp: data });
            })
            .catch(error => {
                alert(error);
            })
    }

    delTask = id => {
        axios.get(`https://localhost:${this.PORT}/api/values/delete?id=${id}`)
            .then(({ data }) => {
                this.setState({ resp: data });
            })
            .catch(error => {
                alert(error);
            })
    }

    flagCahange = id => {
        axios.get(`https://localhost:${this.PORT}/api/values/fchange?id=${id}`)
            .then(({ data }) => {
                this.setState({ resp: data });
            })
            .catch(error => {
                alert(error);
            })
    }

    textCahange = (id, text) => {

        axios.get(`https://localhost:${this.PORT}/api/values/tchange?id=${id}&text=${text}`)
            .then(({ data }) => {
                this.setState({resp : data});
            })
            .catch(error => {
                alert(error);
            })
    }

    edit = id => {
        const { resp } = this.state;

        resp.forEach(item => {
            if (item.id == id) {
                this.setState({
                    formData: item,
                    actionForm: true
                })
                return;
            }
        })
    }

}

export default App;
