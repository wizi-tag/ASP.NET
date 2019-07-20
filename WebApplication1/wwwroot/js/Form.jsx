const {
    FormGroup, Button, Input, Label
} = Reactstrap;

console.log("qqqqqqqqqqqqqqqqqqqq");

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NForm inline>
                <FormGroup>
                    <Label for="text" hidden>Email</Label>
                    <Input type="text" name="text" id="text" placeholder="text" />
                </FormGroup>
                {' '}
                <Button>Add</Button>
                <Button>Cancel</Button>
            </NForm >
        );
    }
}