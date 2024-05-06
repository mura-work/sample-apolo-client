import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const URL = "http://localhost:4000/graphql";
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(`{
          getBooks{
            title
            content
          }
        }`),
      };
      const res = await fetch(URL, params).then((r) => r.json());
      console.log(res);
    };
    init();
  }, []);
  return (
    <div>
      <h2>GraphQL Clientの動作確認</h2>
    </div>
  );
}
