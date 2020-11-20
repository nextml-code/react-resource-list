import React from "react";
import RenderGate from "@codewell/render-gate/lib/prod";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Spinner = styled(FontAwesomeIcon)`
animation: rotate 1s ease-in-out infinite;
font-size: var(--aiwizo-application-font-size-small);
margin-left: auto;
color: var(--aiwizo-application-grey);
`

const Loader = ({ loading }) => (
  <RenderGate condition={loading}>
    <Spinner icon={faSyncAlt} />
  </RenderGate>
);

export default Loader;
