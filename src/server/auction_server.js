const registerListener = () =>
  Deno.listen({
    port: 8000,
    transport: "tcp",
    hostname: "10.132.124.232",
  });

export const readFromAgent = async (conn) => {
  const buffer = new Uint8Array(1024);
  const decoder = new TextDecoder();
  const bytesRead = await conn.read(buffer);

  return decoder.decode(buffer.slice(0, bytesRead));
};

export const serve = async (conn, msgFromAgent) => {
  const encoder = new TextEncoder();
  console.log("Message From Client : " + msgFromAgent);

  await conn.write(encoder.encode(msgFromAgent));
};

const main = async () => {
  for await (const conn of registerListener()) {
    console.log("Connection Established");
    const msgFromAgent = await readFromAgent(conn);
    await serve(conn, msgFromAgent);
    await conn.close();
  }
};

main();
