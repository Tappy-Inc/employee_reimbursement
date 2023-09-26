import { NextPage } from "next";

const page: NextPage = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts",
  );

  const data = (await response.json()) as { id: string; title: string }[];

  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  );
};

export default page;
