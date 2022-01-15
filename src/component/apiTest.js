import { Component } from 'react';
class apiTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: true,
            itemsData: {}
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 444,
                id: 102,
                title: "shivam post request",
                body: "this is our test post request"
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    itemsData: data,
                    error: false
                })
            })
    }
    render() {
        if (this.state.error) {
            return (
                <h1>api data not coming!</h1>
            )
        } else if (!this.state.error) {
            return (
                <ul>
                    {
                        <>
                            <li key={this.state.itemsData.id}>
                                {`${this.state.itemsData.title} id is ${this.state.itemsData.id}`}
                            </li>
                            <li key={this.state.itemsData.id}>
                                {this.state.itemsData.id + 1}
                            </li>
                        </>
                    }
                </ul>
            )
        }
    }
}
export default apiTest;