import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: [
    {
      format: "esm",
      file: "dist/index.js"
    },
    {
      format: "system",
      file: "dist/index.s.js"
    }
  ],
  external: ["common"],
  plugins: [
    resolve({
      modulesOnly: true,
      resolveOnly: []
    })
  ]
};
