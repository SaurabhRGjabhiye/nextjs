import Link from "next/link";

export default function Celebration() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 overflow-hidden">
            {/* Confetti-like decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute text-6xl animate-spin" style={{ top: '5%', left: '10%', animationDuration: '5s' }}>🎉</div>
                <div className="absolute text-5xl animate-spin" style={{ top: '10%', right: '10%', animationDuration: '4s' }}>🎊</div>
                <div className="absolute text-6xl animate-bounce" style={{ bottom: '10%', left: '15%', animationDuration: '3s' }}>💝</div>
                <div className="absolute text-5xl animate-bounce" style={{ bottom: '15%', right: '15%', animationDuration: '2.5s' }}>💖</div>
                <div className="absolute text-7xl animate-pulse" style={{ top: '40%', left: '5%', animationDuration: '2s' }}>❤️</div>
                <div className="absolute text-6xl animate-pulse" style={{ top: '50%', right: '5%', animationDuration: '2.2s' }}>💕</div>
            </div>

            <div className="z-10 max-w-3xl bg-white bg-opacity-95 p-12 rounded-3xl shadow-2xl text-center">
                <div className="animate-bounce mb-6">
                    <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-red-600">
                        YES! 🎉
                    </h1>
                </div>

                <div className="text-6xl my-8">
                    💖 🎊 💕 🎉 💗
                </div>

                <h2 className="text-4xl font-bold text-pink-700 mb-6">
                    You Said Yes, Purva! 🎊
                </h2>

                <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                    You&#39;ve just made me the happiest person in the world! 💕
                    <br />
                    <br />
                    I promise to be better, to make fewer mistakes,<br />
                    and to cherish every moment with you.<br />
                    From our BE days to now, and forever more! 💑
                </p>

                <div className="space-y-4 text-xl text-pink-600 font-semibold mb-8">
                    <p>🍮 I&#39;ll get you all the gulab jamun you want</p>
                    <p>😴 I&#39;ll let you sleep in peace (sometimes! 😄)</p>
                    <p>✨ I&#39;ll make every day special for you</p>
                    <p>❤️ I&#39;ll love you from Ahmedabad and everywhere</p>
                </div>

                <div className="mt-10">
                    <Link href="/love-note">
                        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white px-12 py-4 rounded-full text-2xl font-bold hover:from-pink-600 hover:via-purple-600 hover:to-red-600 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                            💌 Read Your Special Letter
                        </button>
                    </Link>
                </div>

                <div className="mt-8 text-gray-500 text-sm">
                    <Link href="/" className="underline hover:text-pink-500">Return to Home</Link>
                </div>
            </div>
        </main>
    );
}
