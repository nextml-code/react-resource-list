import React, { useState } from "react";
import styled from "styled-components";
import ComponentMap from "@codewell/component-map";
import Resource from "./Resource";
import Loader from "./Loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 700;
  padding: var(--aiwizo-application-spacing-small) 0;
  font-family: var(--aiwizo-application-default-font);
  font-size: var(--aiwizo-application-font-size-big);
  display: flex;
  align-items: center;
`;

const ReactResourceList = ({
  resources,
  onResourceSelect,
  onAnnotationSelect,
  onAnnotationDelete,
  loading = false,
  title = "Resources",
}) => {
  const [state, dispatch] = useState({
    activeResource: null,
    activeAnnotation: null,
  });

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
          onAnnotationSelect,
          onAnnotationDelete,
          onResourceSelect,
        }}
        component={Resource}
        keyFunction={(props, _) => props.id}
      />
    </Wrapper>
  );
};

export default ReactResourceList;
