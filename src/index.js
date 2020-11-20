import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ComponentMap from "@codewell/component-map";
import Resource from "./Resource";
import Loader from "./Loader";
import defer from "@codewell/defer";

const Wrapper = styled.div`
  border-radius: var(--aiwizo-application-border-radius-primary);
  border: 1px solid var(--aiwizo-application-primary-border-grey);
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 700;
  padding: var(--aiwizo-application-spacing-small);
  font-family: var(--aiwizo-application-default-font);
  font-size: var(--aiwizo-application-font-size-big);
  display: flex;
  align-items: center;
`;

const ReactResourceList = ({
  title = "Resources",
  url,
  annotationOptions,
  onAnnotationSelect,
  onResourceSelect,
  onAnnotationDelete,
}) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useState({
    activeResource: null,
    activeAnnotation: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.resources)
      .then(setResources)
      .then(defer(setLoading, false));
  }, [url]);

  return (
    <Wrapper>
      <Title>
        {title} <Loader loading={loading} />
      </Title>
      <ComponentMap
        data={resources}
        commonProperties={{
          state,
          dispatch,
          annotationOptions,
          onAnnotationSelect,
          onAnnotationDelete,
          onResourceSelect,
        }}
        component={Resource}
        keyFunction={(props, _) => props._id}
      />
    </Wrapper>
  );
};

export default ReactResourceList;
