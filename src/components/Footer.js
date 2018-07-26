import React from 'react';
import FilterLink from '../containers/FilterLink';
import SortLink from '../containers/SortLink';
import FilterCheckbox from '../containers/FilterCheckbox';
import { SortFilters, VisibilityFilters } from '../actions/actions';

const Footer = () => (
  <div>
    <div>
      <span>
        Show:
      </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
    <div>
      <span>
        Sort:
      </span>
      <SortLink filter={SortFilters.SORT_ASC}>
        Oldest First
      </SortLink>
      <SortLink filter={SortFilters.SORT_DESC}>
        Newest First
      </SortLink>
    </div>
    <div>
      <span>
        Show Old Tasks:
      </span>
      <FilterCheckbox />
    </div>
  </div>
);

export default Footer;
