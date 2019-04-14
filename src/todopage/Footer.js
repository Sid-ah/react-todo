import React from 'react';
const {Button} =  require('../utils/helpers');

class Footer extends React.Component {
  isActive = (text) => {
      let filter = this.props.filter === text ? "active" : "";
      return `footer__button ${filter}`
  }

  render() {
    return (
      <footer className="footer">
          <Button className={this.isActive}  text="All" setActiveFilter={this.props.setActiveFilter} />
          <Button className={this.isActive} text="Active" setActiveFilter={this.props.setActiveFilter}/>
          <Button className={this.isActive}  text="Completed" setActiveFilter={this.props.setActiveFilter}/>
      </footer>
    )
  }
}

export default Footer;