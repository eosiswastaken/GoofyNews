import './NavBarRubrique.css'; 
import { useRubrique } from '../Context/RubriqueContext'; 


import PropTypes from 'prop-types';

function NavBarRubrique(props) {


  const {rubrique_titre} = props;
  const { openedRubrique, setOpenedRubrique } = useRubrique();




  return (
  <h3 className={`nav-bar-rubrique ${openedRubrique === rubrique_titre ? 'selected' : ''}`} onClick={()=> setOpenedRubrique(rubrique_titre)}>
      {rubrique_titre}
    </h3>
    );


}


// props required
NavBarRubrique.propTypes = {
  rubrique_titre: PropTypes.string.isRequired,
  rubrique_lien: PropTypes.string.isRequired
};



export default NavBarRubrique;
