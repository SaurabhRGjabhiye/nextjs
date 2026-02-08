
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <div className="text-center space-y-8 bg-white bg-opacity-80 p-12 rounded-3xl shadow-2xl">
        <div className="animate-bounce">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Hey Purva! 💖
          </h1>
        </div>

        <p className="text-2xl text-pink-700 font-semibold mb-4 text-center">
          Remember our BE days? Those were the best times... 🎓
        </p>

        <p className="text-xl text-pink-600 mb-8 max-w-lg mx-auto text-center">
           I know things got tough when I moved to Ahmedabad,
           <br />
           but you&#39;re still the one who makes my heart skip a beat.
           <br />
           <br />
           I&#39;ve made something special for you... 🍮✨
        </p>

        <Link href="/proposal-page">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full text-2xl font-bold hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg">
            ✨ Open Your Surprise ✨
          </button>
        </Link>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <span className="text-4xl animate-pulse">💕</span>
          <span className="text-4xl animate-pulse" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="text-4xl animate-pulse" style={{ animationDelay: '0.6s' }}>💗</span>
        </div>
      </div>
    </main>
  );
}
