import { connect } from 'react-redux';
import Account from '../views/Account';

const mapStateToProps = (store) => ({
    initialAmount: store.initialAmount,
    totalSent: store.totalSent,
    transactions: store.transactions
});

export default connect(mapStateToProps)(Account);
