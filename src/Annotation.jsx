import React from "react";
import styled from "styled-components";
import { Select } from "@aiwizo/react-form-components";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defer from '@codewell/defer'

const Wrapper = styled.div`
  border-top: var(--aiwizo-application-border-light-grey);
  padding-top: var(--aiwizo-application-spacing-small);
  display: flex;
  align-items: center;
`;

const Remove = styled(FontAwesomeIcon)`
  margin-left: auto;
  color: var(--aiwizo-application-grey);
  cursor: pointer;
  :hover {
    color: var(--aiwizo-application-red);
  }
`;

const findLabelIndex = (options, label) => {
  const index = options.reduce((result, currentValue, index) => {
    if (currentValue.label === label) {
      return index;
    }
    return result;
  }, -1);

  return index;
};

const Annotation = ({ annotationOptions, onSelect, onDelete, ...annotation }) => {
  return (
    <Wrapper>
      <Select
        options={annotationOptions}
        renderAs={(option, _) => {
          return (
            <div>
              {option.label} <span>(prediction {option.prediction})</span>
            </div>
          );
        }}
        onSelect={option => {onSelect({...annotation, label: option.label})}}
        defaultIndex={findLabelIndex(annotationOptions, annotation.label)}
      />

      <Remove icon={faTimesCircle} onClick={defer(onDelete, annotation)}/>
    </Wrapper>
  );
};

export default Annotation;
