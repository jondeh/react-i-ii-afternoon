import React, {Component} from 'react'

class NameForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            employer: '',
            jobTitle: '',
            favMovies: []
        }
    }











    render(){
        return(
            <div className="nameForm">
                
                
                <input type="text" name="firstName" value={this.state.firstName} 
                onChange={e => this.setState({firstName: e.target.value})}/>
                
                <input type="text" name="lastName" value={this.state.lastName}
                onChange={e => this.setState({firstName: e.target.value})} />
                
                <input type="text" name="city" value={this.state.city}
                onChange={e => this.setState({firstName: e.target.value})} />
                
                <input type="text" name="country" value={this.state.country}
                onChange={e => this.setState({firstName: e.target.value})} />
                
                <input type="text" name="employer" value={this.state.employer}
                onChange={e => this.setState({firstName: e.target.value})} />
                
                <input type="text" name="jobTitle" value={this.state.jobTitle}
                onChange={e => this.setState({firstName: e.target.value})} />

                <input type="text" name="favMovies" value={this.state.favMovies}
                onChange={e => this.setState({firstName: e.target.value})} />

            </div>
        )
    }
}

