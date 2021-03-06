// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { StyledSubNavTitle } from './SubNav-styled';

import { SubNavContext } from './SubNav';

const SubNavTitle = ({ children, ...other }) => {
  const subNavContext = useContext(SubNavContext);

  return (
    <StyledSubNavTitle blue={subNavContext.blue} {...other}>
      {children}
    </StyledSubNavTitle>
  );
};

SubNavTitle.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node
};

SubNavTitle.defaultProps = {};

SubNavTitle.displayName = 'SubNavTitle';

export default SubNavTitle;
