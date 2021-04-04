import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class UsaData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uspop: []
        };
        //this.populationTableData = this.populationTableData.bind(this);
    }
    componentDidMount() {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => {
                console.log('res: ', res.data);
                this.setState({ uspop: res.data.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log('this.state: ', this.state.uspop);
        let element = this.state.uspop.map(ele => {
            return (
                <tr key={ele.Year}>
                    <td>{ele.Nation}</td>
                    <td>{ele.Year}</td>
                    <td>{ele.Population}</td>
                </tr>
            )
        })
        return (
            <div>
                <h1 id='title'>USA Population by year</h1>
                <table id='pop'>
                    <thead>
                        <tr id='header'>
                            <th>Nation</th>
                            <th>Year</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsaData;