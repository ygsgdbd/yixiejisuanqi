import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/yuebao"}>
        <button>余额宝</button>
      </Link>
    </div>
  );
}
