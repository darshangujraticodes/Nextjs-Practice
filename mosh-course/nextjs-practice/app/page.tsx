import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="text-center mt-5 text-4xl font-medium">Hello Next Js</h1>

        <div className="navBtnWrap  flex justify-center  mt-5 items-center ">
          <Link
            href="/users"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            User Info
          </Link>
          <Link
            href="/users/login"
            className=" bg-stone-800 text-white p-3 rounded-lg mx-3 font-semibold text-xl "
          >
            {" "}
            User Login{" "}
          </Link>
        </div>
      </section>
    </main>
  );
}
