import { connect } from 'react-redux';
import { setSortFilter } from '../actions/actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSortFilter(ownProps.filter)),
});

const SortLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default SortLink;
