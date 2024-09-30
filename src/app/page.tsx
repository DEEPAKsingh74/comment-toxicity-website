import Link from "next/link";
import { Kanit } from "next/font/google";
import About from "./components/about/page";
import Motivation from "./components/motivation/page";

const kanit = Kanit({
  subsets: ['latin'],
  weight: '600'
})

export default function Home() {
  return (
    <div>
      {/* navbar */}

      {/* hero */}
      <div
        className="relative w-[95vw] h-[50vh] m-auto rounded-xl px-8 py-4 flex flex-col justify-center items-start gap-8"
        style={{
          backgroundImage: `url("/comment_bg.webp")`, // Use backticks
          backgroundSize: 'cover',  // Ensures the image covers the div
          backgroundPosition: 'center',  // Centers the background image
        }}
      >
        <div className="backdrop-blur-sm w-full h-[100%] flex flex-col gap-4">
          <h1 className={`font-bold text-3xl text-black/90 tracking-widest ${kanit.className}`}>Comment Toxicity Classification</h1>
          <p className="font-semibold w-[60%] text-lg tracking-wider text-black/80">This is a research based project where i have picked up the comments dataset and tried to classify them into six categories of toxicity. These categories are toxic, severe toxic, obscene, insult, identity hate. There is increase of toxicity in public forums as the craze of social media is going, so this model helps them to preict if some comment is toxic of not.</p>

          <div className="flex gap-4">
            <button className="bg-black/70 text-white px-4 py-2 rounded-2xl"><Link href='/presentation'>Try It Now</Link></button>
            <button className="bg-black/70 text-white px-4 py-2 rounded-2xl"><Link href='https://github.com/DEEPAKsingh74/End_to_end_comment_toxicity'>View Code On Github</Link></button>
          </div>
        </div>
      </div>


      {/* about project */}

      <div className="px-8 my-8">
        <About />
      </div>

      <div className="px-8 my-8">
        <Motivation />
      </div>

      {/* footer */}
    </div>
  );
}
