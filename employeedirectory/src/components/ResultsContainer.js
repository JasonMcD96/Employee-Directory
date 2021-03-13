import React, { Component } from "react";
import API from "../utils/API"

class ResultsContainer extends Component {

    state = {
        originalArray: [],
        modifiedArray: [],
    }

    componentDidMount() {
        API.getEmployee().then(res => console.log(res.data.results))
    }

    render() {
        return (
            <div>
                <h2>Table</h2>
            </div>
        )
    }
}

export default ResultsContainer