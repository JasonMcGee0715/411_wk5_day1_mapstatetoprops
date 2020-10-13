import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(About)