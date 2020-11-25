import React from "react";
import styled from "styled-components";
import isDefined from "@codewell/is-defined";
import isEmpty from "@codewell/is-empty";

import {
  faEye,
  faEyeSlash,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defer from "@codewell/defer";
import { useState } from "react";

const Wrapper = styled.div`
  border-top: 1px solid var(--aiwizo-application-primary-border-grey);
  padding: var(--aiwizo-application-spacing-small);
  display: flex;
  align-items: center;

  :hover {
    background-color: var(--aiwizo-application-light-background-blue);
  }
`;

const OptionsWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

const Remove = styled(FontAwesomeIcon)`
  margin-left: var(--aiwizo-application-spacing-small);
  color: var(--aiwizo-application-grey);
  cursor: pointer;
  font-size: var(--aiwizo-application-font-size-regular);
  :hover {
    color: var(--aiwizo-application-red);
  }
`;

const Eye = styled(FontAwesomeIcon)`
  margin-left: var(--aiwizo-application-spacing-small);
  color: var(--aiwizo-application-grey);
  cursor: pointer;
  font-size: var(--aiwizo-application-font-size-regular);
  :hover {
    color: var(--aiwizo-application-blue);
  }
`;

const StyledLabel = styled.span`
  font-size: var(--aiwizo-application-font-size-regular);
`;

const EmptyLabel = styled.span`
  font-size: var(--aiwizo-application-font-size-regular);
  color: var(--aiwizo-application-faded-text-grey);
`;

const Label = ({ label }) => {
  if (!isDefined(label) || isEmpty(label)) {
    return <EmptyLabel>Select a label...</EmptyLabel>;
  }
  return <StyledLabel>{label}</StyledLabel>;
};

const Annotation = ({
  annotationOptions,
  onSelect,
  onDelete,
  mappingIndex,
  ...annotation
}) => {
  const [visible, setVisibility] = useState(true);
  return (
    <Wrapper
      mappingIndex={mappingIndex}
      onClick={defer(onSelect, { ...annotation, visible })}
    >
      <Label label={annotation.label} />
      <OptionsWrapper>
        <Eye
          icon={visible ? faEye : faEyeSlash}
          onClick={() => {
            setVisibility(!visible);
          }}
        />
        <Remove icon={faTimesCircle} onClick={defer(onDelete, annotation)} />
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Annotation;
