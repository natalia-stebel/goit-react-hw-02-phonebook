
import React, { Component } from 'react';

 class ContactForm extends Component {
  

    state = {
      name: '',
      number: '',
    };

handleInputChange = e => {
const {name, value} = e.currentTarget;
this.setState({
    [name]: value,
})
};


handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      };

reset = () =>{
    this.setState({name:"",number:""})
}



render (){

   return(
    <form action="submit" onSubmit={this.handleSubmit}>
        <label htmlFor=''>
        Name
            <input 
            value={this.state.name} onCnahge={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
        </label>

        <label htmlFor=''>
            Number
            <input
            
              value={this.state.number} onCnahge={this.handleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" >
            Add contact
          </button>
    </form>
   )
}
}

export default ContactForm;
