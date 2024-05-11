import { SidebarTree } from './sidebar-tree.js';
import { Splitter } from './splitter.js';

const splitter = new Splitter();
const sidebar = document.querySelectorAll('nav > details');
Array.from(sidebar).forEach(sidebar => new SidebarTree(sidebar));