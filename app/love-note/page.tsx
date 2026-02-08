import Link from "next/link";

export default function LoveNote() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-200 via-pink-200 to-red-200">
            <div className="max-w-2xl bg-white bg-opacity-95 p-12 rounded-3xl shadow-2xl border-4 border-pink-300">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-pink-700 mb-4">A Letter for Purva 💌</h1>
                    <div className="text-6xl mb-4">💝</div>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="text-center italic text-pink-600 font-semibold text-xl">
                        My Dearest Purva,
                    </p>

                    <p className="text-center">
                        Do you remember our 2nd year of BE? That&#39;s when you came into my life,<br />
                        and everything changed. Your smile, your laugh, the way you light up<br />
                        when you see gulab jamun... 🍮 These little things make you so special to me.
                    </p>

                    <p className="text-center">
                        I know life hasn&#39;t been easy since I moved to Ahmedabad in 7th sem.<br />
                        The distance brought challenges, and we&#39;ve had our share of quarrels.<br />
                        I know I&#39;m not the perfect boyfriend, and I&#39;ve made mistakes along the way.
                    </p>

                    <p className="text-center font-semibold text-pink-700 text-xl my-6">
                        💕 But here&#39;s what I know for sure... 💕<br />
                        I love watching you sleep peacefully,<br />
                        I love your excitement for sweet things,<br />
                        And I love YOU, with all my heart.
                    </p>

                    <p className="text-center">
                        I&#39;m proposing to you again because I want you to know that<br />
                        despite all the ups and downs, you&#39;re the one I choose.<br />
                        Every single day. I promise to try my best, to be better,<br />
                        and to make you feel as special as you truly are.
                    </p>

                    <p className="text-center font-semibold text-pink-600 text-lg my-4">
                        This website is my way of saying:<br />
                        Let&#39;s start fresh. Let&#39;s make new memories.<br />
                        Let&#39;s build something beautiful together. 🌟
                    </p>

                    <p className="text-center italic text-pink-600 font-semibold text-xl mt-8">
                        Forever trying to be better for you,<br />
                        Your imperfect but loving boyfriend,<br />
                        Saurabh 💕
                    </p>
                </div>

                <div className="mt-10 flex justify-center space-x-4">
                    <Link href="/">
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                            🏠 Home
                        </button>
                    </Link>
                    <Link href="/proposal-page">
                        <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                            💖 Answer the Question
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
