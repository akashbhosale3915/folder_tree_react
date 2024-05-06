/* eslint-disable react/prop-types */
import { useState } from "react";

const Tree = ({ tree }) => {
  return (
    <div>
      {tree.children.map((child) => (
        <TreeNode tree={child} key={child.name} />
      ))}
    </div>
  );
};

const TreeNode = ({ tree }) => {
  const [open, setopen] = useState(true);
  return (
    <div>
      <button
        className={tree.children ? "btn folder" : "btn"}
        onClick={() => tree.children && setopen(!open)}
      >
        {tree.name}
      </button>
      {open && <Branch tree={tree} />}
    </div>
  );
};

const Branch = ({ tree }) => {
  return (
    <div className="file">
      {tree?.children?.map((child) => (
        <TreeNode tree={child} key={child.name} />
      ))}
    </div>
  );
};

export default Tree;
