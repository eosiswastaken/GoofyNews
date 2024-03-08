import './NavBarRubrique.css'; 

import PropTypes from 'prop-types';

function NavBarRubrique(props) {
  const {rubrique_titre, rubrique_lien} = props;


  return (
    <a href={rubrique_lien}><h3 className='nav-bar-rubrique'>{rubrique_titre}</h3></a>
  );


}


// props required
NavBarRubrique.propTypes = {
  rubrique_titre: PropTypes.string.isRequired,
  rubrique_lien: PropTypes.string.isRequired
};



export default NavBarRubrique;
