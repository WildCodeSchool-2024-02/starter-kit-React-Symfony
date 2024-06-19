export default function CustomHmr() {
  return {
    name: "custum-hmr",
    enforce: "post",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".twig")) {
        server.ws.send({ type: "full-reload", path: "*" });
      }
    },
  };
}
