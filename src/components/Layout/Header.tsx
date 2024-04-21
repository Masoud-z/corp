import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex absolute text-white mx-auto w-full justify-between items-center p-8 container z-10">
      <Link href="/" className="font-bold text-3xl">
        Home
      </Link>
      <div className="text-xl space-x-4">
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
    </nav>
  );
};

export default Header;
