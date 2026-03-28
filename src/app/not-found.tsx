import Link from "next/link";
import Image from "next/image";

const baseImagePath = "/assets/images/";

const NotFound = () => {
  return (
    <main className="not-found-page">
        <section className="full-bleed">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="text-div flex flex-col justify-center">
                    <h1>404 Error</h1>
                    <p className="mb-12">Id pretium nec facilisi eget sem. Sed pretium est tortor lorem eget feugiat orci viverra vulputate. Consectetur faucibus turpis leo, vestibulum sodales porttitor.</p>
                    <Link href="/" className="btn-primary w-fit">Go back home</Link>
                </div>

            <div className="image-div border-radius-md overflow-hidden">
                <Image src={`${baseImagePath}placeholder-img.png`} alt="Not Found" width={500} height={500} />
            </div>

            </div>
        </section>
    </main>
  );
};

export default NotFound;