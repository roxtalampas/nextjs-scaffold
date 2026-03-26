import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/shared/components/HeroBanner";



export default function Home() {
  return (
    <main>
      <HeroBanner />

      <section>
        <h2>Our Projects</h2>
        <div>
          <div>
            <h3>Project 1</h3>
            <p>Project 1 description</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Project 2</h3>
            <p>Project 2 description</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Project 3</h3>
            <p>Project 3 description</p>
          </div>
        </div>
      </section>
    </main>
  );
}
