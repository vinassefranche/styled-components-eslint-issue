import React, { useState } from 'react';
import styled from 'styled-components';

export const WorkingLint: React.FunctionComponent<{prop?: string}> = ({prop}) => {
  if(!prop) {
    return null;
  }
  const [] = useState(false);
  return (
    <div> Lint on hook is working </div>
  );
};

export const NotWorkingLint = styled(({prop}:{prop?: string}) => {
  if(!prop) {
    return null;
  }
  const [] = useState(false);
  return (
    <div> Lint on hook is not working </div>
  );
})``;

