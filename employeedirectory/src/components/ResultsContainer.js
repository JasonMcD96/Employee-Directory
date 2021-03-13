import React, { Component } from "react";
import API from "../utils/API"

class ResultsContainer extends Component {

    state = {
        employeeArray: [],
        filteredArray: [],
        search: ""
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value }, () => {
            this.setState({
                filteredArray: this.state.employeeArray.filter(
                    emp => (emp.name.first.toLowerCase()).includes(this.state.search.toLowerCase())
                )
            })
        })
    }

    componentDidMount() {
        API.getEmployee().then(res => {
            this.setState({ employeeArray: res.data.results })
            this.setState({ filteredArray: res.data.results })
            console.log(this.state.employeeArray)
        })
    }

    sortDescending(){

        function compare(a, b) {
            const nameA = a.name.first.toLowerCase();
            const nameB = b.name.first.toLowerCase();

            let comparison = 0;
            if((nameA > nameB)){
                comparison = 1;
            }else if (nameA < nameB){
                comparison = -1;
            }

            return comparison;
        }

        let array = this.state.filteredArray.sort(compare);
        this.setState({filteredArray: array})

    }

    sortAscending(){
        function compare(a, b) {
            const nameA = a.name.first.toLowerCase();
            const nameB = b.name.first.toLowerCase();
            let comparison = 0;
            if((nameA < nameB)){
                comparison = 1;
            }else if (nameA > nameB){
                comparison = -1;
            }

            return comparison;
        }

        let array = this.state.filteredArray.sort(compare);
        this.setState({filteredArray: array})

    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.search} placeholder="Search By First Name" onChange={this.updateSearch}></input>
                <button onClick={this.sortDescending.bind(this)}>Name Decending</button>
                <button onClick={this.sortAscending.bind(this)}>Name Ascending</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Profile Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filteredArray.map(({
                                picture,
                                name,
                                email,
                                cell }) => {

                                return (
                                    <tr>
                                        <th> <img src={picture.large} alt="Emoployee"/> </th>
                                        <td>{name.first} {name.last}</td>
                                        <td>{email}</td>
                                        <td>{cell}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsContainer