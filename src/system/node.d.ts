import {Element} from '../common/element';

/**
 * Class: Node
 */
export declare class Node extends Element {
  routerLink: any;
  expanded: boolean;
  parentId: number;
  children: Node[];

  find(expression: any, root?: Node);
  print(print?: any, root?: Node);
  traverse(callback?: any, root?: Node);
  remove(node: Node, root?: Node);
  add(node: Node, root?: Node);

  private _update(root: Node, item: Node);
  private _addChild(node: Node, root: Node);
  private _removeChildren(root: Node);

  constructor();
  constructor(options: Object);
}
