import React, { Component } from 'react';
import Collapsibles from './Collapsibles';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';

class Form extends Component {

  render() {

    return (
      < form className="main-form" action="">

        <Collapsibles name="Diseña" icon="far fa-object-ungroup form__icons">
          <FormDesign
            palette={this.props.palette}
            handleChangeCard={this.props.handleChangeCard}
          />
        </ Collapsibles >
        <Collapsibles name="Rellena" icon="far fa-keyboard form__icons">
          <FormFill
            name={this.props.name}
            job={this.props.job}
            phone={this.props.phone}
            email={this.props.email}
            linkedin={this.props.linkedin}
            github={this.props.github}
            handleChangeCard={this.props.handleChangeCard}
            getImage={this.props.getImage}
            photo={this.props.photo}

          />
        </ Collapsibles >
        <Collapsibles name="Comparte" icon="fas fa-share-alt form__icons">
          <FormShare
            card={this.props}
            handleClickCreate={this.props.handleClickCreate}
            stateUrl={this.props.stateUrl}
            stateError={this.props.stateError}
            loading={this.props.loading} />
        </Collapsibles >

      </form>

    )
  }
}

export default Form;
