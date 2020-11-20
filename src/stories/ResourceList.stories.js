import React from "react";
import ResourceList from "..";

export default {
  title: "Resource List",
  component: ResourceList,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ResourceList {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

const annotationOptions = [
  { label: "TLA-0001", prediction: 0.8 },
  { label: "TLA-0002", prediction: 0.9 },
  { label: "TLA-0003", prediction: 0.78 },
  { label: "TLA-0004", prediction: 0.95 },
];

const onResourceSelect = (resource) => {
  console.log(`REQUEST /v1/resources/${resource._id}`);
};

const onAnnotationSelect = ({ annotation, resource }) => {
  console.log(
    `REQUEST /v1/resources/${resource._id}/annotations/${annotation._id}`,
    `label: ${annotation.label}`,
  );
};

const onAnnotationDelete = ({ annotation, resource }) => {
  console.log(
    `REQUEST /v1/resources/${resource._id}/annotations/${annotation._id}`,
  );
};

Primary.args = {
  url: "http://localhost:8080",
  annotationOptions,
  onResourceSelect,
  onAnnotationSelect,
  onAnnotationDelete,
};

Secondary.args = {
  url: "http://localhost:8080",
  annotationOptions,
  title: "Images",
  annotationOptions,
  onResourceSelect,
  onAnnotationSelect,
  onAnnotationDelete,
};
