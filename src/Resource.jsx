import React from "react";
import styled, { css } from "styled-components";
import Annotation from "./Annotation";
import RenderGate from "@codewell/render-gate";
import ComponentMap from "@codewell/component-map";

const Wrapper = styled.div`
  font-family: var(--aiwizo-application-default-font);
  border-top: 1px solid var(--aiwizo-application-primary-border-grey);
`;

const ResourceHeader = styled.div`
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  color: var(--aiwizo-application-faded-text-grey);
  :hover {
    background-color: var(--aiwizo-application-light-background-blue);
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: var(--aiwizo-application-light-background-blue);
    `}
`;

const FileName = styled.div`
  font-family: var(--aiwizo-application-default-font);
  padding: var(--aiwizo-application-spacing-small);
  var(--aiwizo-application-spacing-small);
  ${(props) =>
    props.selected &&
    css`
      font-weight: 700;
      color: var(--aiwizo-application-black);
    `}
`;

const AnnotationsWrapper = styled.div`
  padding: var(--aiwizo-application-spacing-small);
`;

const selectResource = (state, dispatch, resource, onResourceSelect) => () => {
  if (state.selectedResource !== resource._id) {
    dispatch({ ...state, selectedResource: resource._id });
  } else {
    dispatch({ ...state, selectedResource: null });
  }
  onResourceSelect(resource);
};

const annotationAction = (func, resource) => (annotation) => {
  func({annotation, resource});
};

const Resource = ({
  state,
  dispatch,
  annotationOptions,
  onAnnotationSelect,
  onAnnotationDelete,
  onResourceSelect,
  ...resource
}) => {
  const {_id, filename, annotations} = resource
  const isSelected = _id === state.selectedResource;


  return (
    <Wrapper key={_id} selected={isSelected}>
      <ResourceHeader
        selected={isSelected}
        onClick={selectResource(state, dispatch, resource, onResourceSelect)}
      >
        <FileName selected={isSelected}>{filename}</FileName>
      </ResourceHeader>
      <RenderGate condition={isSelected}>
        <AnnotationsWrapper>
          Annotations
          <ComponentMap
            data={annotations}
            commonProperties={{
              state,
              dispatch,
              annotationOptions,
              onSelect: annotationAction(onAnnotationSelect, resource),
              onDelete: annotationAction(onAnnotationDelete, resource)
            }}
            component={Annotation}
            keyFunction={(props, _) => props._id}
          />
        </AnnotationsWrapper>
      </RenderGate>
    </Wrapper>
  );
};

export default Resource;
