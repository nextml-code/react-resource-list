# React Resource List

## Installation

```
npm install @aiwizo/react-resource-list
```

## Basic Usage

```JavaScript
import ResourceList from '@codewell/react-resource-list';

const SomeComponent = (props) => {
  return (
    <ResourceList
      url="http://some.url",
      annotationOptions={[]}
      onResourceSelect={(resource) => {...}}
      onAnnotationSelect={({resource, annotation}) => {...}}
      onAnnotationDelete={({resource, annotation}) => {...}}
    >
  );
};

```
