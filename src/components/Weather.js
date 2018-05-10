import React,{Component} from 'react';
import $ from 'jquery';

class Weather extends Component{

	constructor(){
		super();
		this.state = {weather: '', main:'', description:'', icon:'', temp:'', humidity:'', temp_min:'', temp_max:'', country:'', message:''};
	}

	componentDidMount(){
		var appid = "bcdcd1aee5aaf30e5fe54d8b1dc80138";
		var url = "https://api.openweathermap.org/data/2.5/weather?appid="+appid+"&units=metric&q=" + this.props.name;
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      success:function(response){
	        this.setState({weather : response.name});
	        this.setState({icon : "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"});
	        this.setState({temp : response.main.temp + "°C"});
	        this.setState({main : response.weather[0].main});
	        this.setState({description : response.weather[0].description});
	        this.setState({humidity : response.main.humidity});
	        this.setState({temp_min : response.main.temp_min});
	        this.setState({temp_max : response.main.temp_max});
	        this.setState({country : response.sys.country});
	      }.bind(this),
	      error: function(xhr, status, err) {
	      	if(xhr.status == 404){
				this.setState({message : "City not found!"});
	      	}
	      	else if(xhr.status == 400){
				this.setState({message : "Type the City!"});
	      	}
	      	else{
	      		this.setState({message : "Problem to find!"});
	      	}
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	}

	render(){
		return(
		<div>
			<div className="card-deck mb-3 text-center">
	        <div className="card mb-4 box-shadow">
	          <div className="card-header">
	            <h4 className="my-0 font-weight-normal">{this.props.name}, {this.state.country}</h4>
	          </div>
	          <div className="card-body">
	          	<img src={this.state.icon} alt="icon"/>
	            <h1 className="list-group"><h1>{this.state.temp}{this.state.message}</h1></h1>
	            <ul className="list-unstyled mt-3 mb-4">
	              <li className="list-group-item">{this.state.description}</li>
	              <li className="list-group-item">Humidity: {this.state.humidity}%</li>
	              <li className="list-group-item">Min .: {this.state.temp_min}°C</li>
	              <li className="list-group-item">Max.: {this.state.temp_max}°C</li>
	            </ul>
	          </div>
	        </div>
	        </div>
	      </div>
		);
	}
}

export default Weather;