import { connect } from 'react-redux';
import { toggleOldTodos } from '../actions/actions';
import Checkbox from '../components/Checkbox';

const mapStateToProps = state => ({
  defaultChecked: state.showOldTodos,
});

const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(toggleOldTodos()),
});

const FilterCheckbox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkbox);

export default FilterCheckbox;
