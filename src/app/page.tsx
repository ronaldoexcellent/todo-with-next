import Illustration1 from "@/components/svg/Illustration1";

import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <div className="illustration">
        <Illustration1 />
      </div>
      <h1 className="h1">
        Get things with TODs
      </h1>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.
      </p>

      <Link href="/auth/register">
        <button className="mainButton"> Get Started </button>
      </Link>
    </div>
  );
}