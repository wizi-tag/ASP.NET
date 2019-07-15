class Hello extends React.Component {
    constructor(props) {

        super(props);

        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://localhost:44312/api/values/get?id=9&flag=true&text=rererer', true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            // по окончании запроса доступны:
            // status, statusText
            // responseText, responseXML (при content-type: text/xml)

            if (this.status != 200) {
                // обработать ошибку
                alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
                return;
            }

            //alert(xhr.responseText);
            console.log(xhr.responseText);

            console.log("===========");

            var output = xhr.responseText;

            output = JSON.parse(output);

            this.state = { output: output[0] };

            console.log(output);

            // получить результат из this.responseText или this.responseXML

            var xhr2 = new XMLHttpRequest();

            xhr2.open('GET', 'https://localhost:44312/api/values/gettasks', true);

            xhr2.send();

            xhr2.onreadystatechange = function () {
                if (this.readyState != 4) return;

                // по окончании запроса доступны:
                // status, statusText
                // responseText, responseXML (при content-type: text/xml)

                if (this.status != 200) {
                    // обработать ошибку
                    alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
                    return;
                }

                //alert(xhr.responseText);
                console.log('WWWWWWWWWWWWWWW');
                console.log(xhr2.responseText);

                // получить результат из this.responseText или this.responseXML
            }
        }
    }

    render() {

        return (<div>
                    <h1> Hello World! </h1>
                </div>);
    }

}
ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);