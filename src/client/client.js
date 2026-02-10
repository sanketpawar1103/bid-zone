const readFromServer = async (server) => {
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(1024);

  while (true) {
    const bytesRead = await server.read(buffer);

    if (bytesRead === null) return;

    const msg = decoder.decode(buffer.slice(0, bytesRead));
    console.log(msg);
  }
};

const writeToServer = async (server) => {
  const encoder = new TextEncoder();
  const buffer = new Uint8Array(1024);

  while (true) {
    const bytesRead = await Deno.stdin.read(buffer);

    if (bytesRead === null) return;

    const msg = encoder.encode(buffer.slice(0, bytesRead));

    await server.write(msg);
  }
};

const connectToServer = async (port) => {
  const conn = await Deno.connect({ port, transport: "tcp" });
  return conn;
};

const main = async (args) => {
  const [port = 8000] = args;
  const server = await connectToServer(+port);
  console.log("Conneted to server");

  readFromServer(server);
  writeToServer(server);
};

main(Deno.args);
