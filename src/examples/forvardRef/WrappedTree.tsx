import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Tree, type TreeProps } from 'primereact/tree';

type TWrappedTreeProps = {} & Omit<TreeProps, 'ref'>

export const WrappedTree = forwardRef<any, TWrappedTreeProps>((props, ref) => {
  const treeRef = useRef<Tree | null>(null);

  useImperativeHandle(ref, () => ({
    customMethod: () => {
      console.log('Это метод компонента WrappedTree');
    },
    getTreeInstance: () => treeRef.current,
    componentName: 'WrappedTree'
  }))
  return <Tree {...props} ref={treeRef}/>;
})

export interface IWrappedTree {
  customMethod: () => void;
  getTreeInstance: () => Tree | null;
  componentName:  string;
}