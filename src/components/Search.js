import React,{Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Weather from './Weather.js';

class Search extends Component{

	constructor(){
		super();
	    this.state = {searchText:'', temp:'', modal: false};
	    this.setSearchText = this.setSearchText.bind(this);
	    this.toggle = this.toggle.bind(this);
	}

	toggle() {
	    this.setState({
	      modal: !this.state.modal
	    });
  	}

	setSearchText(event){
	  this.setState({searchText:event.target.value});
	}

	render(){
		return(
			<div>
				<br />
				<input type="text" value={this.state.searchText} onChange={this.setSearchText} placeholder="Type the City" /><br />
				<input type="button" className="btn btn-primary" value="Search" onClick={this.toggle}/>
				
				<div>
		        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
		          <ModalHeader toggle={this.toggle}>Result of your search for {this.state.searchText}</ModalHeader>
		          <ModalBody>
		            <Weather name={this.state.searchText} />
		          </ModalBody>
		        </Modal>
		      </div>
			</div>

		);
	}
}
export default Search;