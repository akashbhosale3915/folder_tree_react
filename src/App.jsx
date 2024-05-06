import Tree from "./components/Tree";

const tree = {
  children: [
    {
      name: "public",
      children: [{ name: "vite.svg" }],
    },
    {
      name: "src",
      children: [
        {
          name: "App.jsx",
        },
        { name: "index.css" },
        { name: "main.jsx" },
        { name: "greet.jsx" },
        {
          name: "components",
          children: [
            { name: "Tree.jsx" },
            { name: "Tree.css" },
            {
              name: "nested",
              children: [
                { name: "utils.js" },
                {
                  name: "nested_folder",
                  children: [{ name: "nested_file.txt" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "package-lock.json",
    },
    {
      name: "README.md",
    },
  ].sort((a, b) => a.children - b.children),
};

const App = () => {
  return <Tree tree={tree} />;
};

export default App;
