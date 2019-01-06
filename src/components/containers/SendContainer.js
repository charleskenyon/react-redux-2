import { connect } from 'react-redux';
import Send from '../views/Send';
import { updateInput, requestTransaction } from '../../actions/Actions';

const mapStateToProps = (store) => ({
    input: store.input
});

export default connect(mapStateToProps, { updateInput, requestTransaction })(Send);
