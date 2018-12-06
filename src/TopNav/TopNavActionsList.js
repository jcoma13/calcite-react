import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNavActions } from './TopNav-styled';

const TopNavActionsList = ({ children, ...other }) => {
  return <StyledTopNavActions {...other}>{children}</StyledTopNavActions>;
};

TopNavActionsList.propTypes = {
  /** The content of the component */
  children: PropTypes.node
};

TopNavActionsList.defaultProps = {};

TopNavActionsList.displayName = 'TopNavActionsList';

export default TopNavActionsList;
