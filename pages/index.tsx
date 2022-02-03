import type { NextPage } from "next";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-6xl font-bold">GAY-E-CHA</h1>
        <p>
          Open the world of <b>GAY-E-CHA</b>
          <br />
          Are you bored? this place will help you ; )
        </p>
        <div className="rounded bg-red-600 px-8 py-4 block text-white mt-8">
          🚫🙅🙅🙅 ไม่รับประกัน หำแข็ง
          <img src="/x.png" className="w-48 mt-2" />
        </div>
        <Link href="/api/gay">
          <a
            target="_blank"
            className="bg-indigo-600 text-white px-8 py-4 block rounded mt-8"
          >
            GAY <span className="bg-gray-900 rounded py-1 px-2 ">/api/gay</span>
          </a>
        </Link>
        <Link href="/api/gay-ok">
          <a
            target="_blank"
            className="bg-indigo-600 text-white px-8 py-4 block rounded mt-4"
          >
            GAY But OK{" "}
            <span className="bg-gray-900 rounded py-1 px-2 ">/api/gay-ok</span>
          </a>
        </Link>
        <hr className="my-5" />
        <p className="text-3xl font-bold">WE NEED HELP!!</p>
        <p>
          Let&#39;s help us creating best GAY rest api by collaborating on
          Github
        </p>
        <hr className="my-5" />
        ©️ {new Date().getFullYear()}{" "}
        <span className="bg-gray-900 py-1 px-2 rounded">😺 🍋 🌙 🧪 💜</span>
      </div>
    </div>
  );
};

export default Home;
