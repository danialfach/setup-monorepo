import ClientSide from "./ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({});
  return (
    <div>
    {response}
    <ClientSide />
  </div>
  );
}
