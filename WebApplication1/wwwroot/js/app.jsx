class Hello extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            resp: {}
        };

        //this.addTask(6, true, "text");

        //this.getTasks();
    }

    render() {
        //this.addTask(1, true, "text");
        return (<div>
            <h1> Hello World! </h1>
                </div>);
    }

    PORT = 44312

     addTask (id, flag, text) {
        let xhr = new XMLHttpRequest();
        let address = `https://localhost:${this.PORT}/api/values/get?id=${id}&flag=${flag}&text=${text}`;

        console.log(address);

        xhr.open('GET', address, true);

        xhr.send();

        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;
            
            if (this.status != 200) {
                alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
                return;
            }

            console.log(xhr.responseText);
        }
    }

    getTasks(){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://localhost:${this.PORT}/api/values/gettasks`, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            if (this.status != 200) {
                alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
                return;
            }

            console.log(xhr.responseText);
        }
    }

}
ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);