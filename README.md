# React Resource List

## Installation

```
npm install @aiwizo/react-resource-list
```

## Basic Usage

```JavaScript
import ResourceList from '@codewell/react-resource-list';

const resources = [/* resources... */];

const SomeComponent = (props) => {
  return (
    <ResourceList
      resources={resources}
      onResourceSelect={(resource) => {...}}
      onAnnotationSelect={({resource, annotation}) => {...}}
      onAnnotationDelete={({resource, annotation}) => {...}}
    />
  );
};

```
