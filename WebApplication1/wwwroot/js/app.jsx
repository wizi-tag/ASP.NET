class Hello extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            resp: []
        };

        this.getTasks = this.getTasks.bind(this);
        this.getTasks()
    }

    render() {
        const { resp } = this.state;


        return (
            <div>
                {
                    resp.map((item, key) =>
                        <div key={key}>
                            <h3> {item} </h3>
                        </div>)
                }
            </div>
            );

          

//        return (<div>
//            <h1> {resp} </h1>
//                </div>);

    }




    PORT = 44312

     addTask () {
        let xhr = new XMLHttpRequest();
        let address = `https://localhost:${this.PORT}/api/values/add`;

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
        console.log('-------');
        xhr.open('GET', `https://localhost:${this.PORT}/api/values/getlist`, true);

        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                alert('ошибка: ' + (xhr.status ? xhr.statusText : 'запрос не удался'));
                return;
            }

            this.setState({ resp: xhr.responseText })
        }.bind(this)
    }

    delTask(id) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://localhost:${this.PORT}/api/values/delete?id=${id}`, true);

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

    flagCahange(id) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://localhost:${this.PORT}/api/values/fchange?id=${id}`, true);

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

    textCahange(id, text) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://localhost:${this.PORT}/api/values/tchange?id=${id}&text=${text}`, true);

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