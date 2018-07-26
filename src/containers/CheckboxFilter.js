import { connect } from 'react-redux';
import { oldTodosFilter } from '../actions/actions';
import Checkbox from '../components/Checkbox';

const mapStateToProps = (state, ownProps) => ({
  active: state.oldTodosFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleOldTodos()),
});

const FilterCheckbox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkbox);

export default FilterCheckbox;
