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

const resources = [
  {
    _id: "0001",
    filename: "file1.png",
    predictions: [{}],
    annotations: [
      {
        id: "id-0001",
        label: "TLA-0001",
      },
      {
        id: "id-0002",
        label: "TLA-0003",
      },
      {
        id: "id-0003",
        label: "TLA-0004",
      },
    ],
  },
  {
    id: "0002",
    filename: "file2.png",
    predictions: [{}],
    annotations: [
      {
        id: "id-0004",
        label: "TLA-0002",
      },
      {
        id: "id-0005",
        label: "TLA-0001",
      },
    ],
  },
];

const onResourceSelect = (resource) => {
  console.log(`REQUEST /v1/resources/${resource.id}`);
};

const onAnnotationSelect = ({ annotation, resource }) => {
  console.log(
    `REQUEST /v1/resources/${resource.id}/annotations/${annotation.id}`,
    `label: ${annotation.label}`,
  );
};

const onAnnotationDelete = ({ annotation, resource }) => {
  console.log(
    `REQUEST /v1/resources/${resource.id}/annotations/${annotation.id}`,
  );
};

Primary.args = {
  resources,
  onResourceSelect,
  onAnnotationSelect,
  onAnnotationDelete,
};

Secondary.args = {
  resources,
  title: "Images",
  onResourceSelect,
  onAnnotationSelect,
  onAnnotationDelete,
};
