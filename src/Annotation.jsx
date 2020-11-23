import React from "react";
import styled from "styled-components";
import { Select } from "@aiwizo/react-form-components";
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
  :first-child {
    border: none;
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
  :hover {
    color: var(--aiwizo-application-red);
  }
`;

const Eye = styled(FontAwesomeIcon)`
  margin-left: var(--aiwizo-application-spacing-small);
  color: var(--aiwizo-application-grey);
  cursor: pointer;
  :hover {
    color: var(--aiwizo-application-blue);
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

const Annotation = ({
  annotationOptions,
  onSelect,
  onDelete,
  mappingIndex,
  ...annotation
}) => {
  const [visible, setVisibility] = useState(true);
  return (
    <Wrapper mappingIndex={mappingIndex}>
      <Select
        options={annotationOptions}
        renderAs={(option, _) => {
          return (
            <div>
              {option.label} <span>(prediction {option.prediction})</span>
            </div>
          );
        }}
        onSelect={(option) => {
          onSelect({ ...annotation, label: option.label, visible });
        }}
        defaultIndex={findLabelIndex(annotationOptions, annotation.label)}
      />
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
