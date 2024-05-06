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
        className={
          tree.children ? "btn folder shrunk" : "btn"
        }
        onClick={() => tree.children && setopen(!open)}
      >
        {tree.children?.length > 0 && (open ? "- " : "+ ")}
        {tree.name}
      </button>
      {open && tree.children && <Branch tree={tree} />}
    </div>
  );
};

const Branch = ({ tree }) => {
  return (
    <div className="indent">
      {tree?.children?.map((child) => (
        <TreeNode tree={child} key={child.name} />
      ))}
    </div>
  );
};

export default Tree;
