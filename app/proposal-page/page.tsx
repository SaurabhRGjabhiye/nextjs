'use client';

import React, { useState } from 'react';

export default function ProposalPage() {
    const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({
        position: 'absolute' as const,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
        transition: 'left 0.3s, top 0.3s',
    });

    const moveNoButton = () => {
        setNoButtonStyle({
            ...noButtonStyle,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-red-100">
            {/* Floating hearts animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute text-4xl animate-bounce" style={{ top: '10%', left: '10%', animationDelay: '0s', animationDuration: '3s' }}>💕</div>
                <div className="absolute text-3xl animate-bounce" style={{ top: '20%', right: '15%', animationDelay: '0.5s', animationDuration: '2.5s' }}>❤️</div>
                <div className="absolute text-4xl animate-bounce" style={{ bottom: '15%', left: '20%', animationDelay: '1s', animationDuration: '3.5s' }}>💖</div>
                <div className="absolute text-3xl animate-bounce" style={{ bottom: '25%', right: '10%', animationDelay: '1.5s', animationDuration: '2.8s' }}>💗</div>
                <div className="absolute text-5xl animate-bounce" style={{ top: '50%', right: '5%', animationDelay: '2s', animationDuration: '3.2s' }}>💝</div>
            </div>

            <div className="z-10 bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl">
                <h1 className="text-5xl font-bold text-pink-700 mb-4 text-center animate-pulse">Purva, will you give us another chance? 💖</h1>
                <p className="text-center text-pink-600 mb-2 text-lg">I know I&#39;m not perfect, but I promise to try my best...</p>
                <p className="text-center text-pink-500 mb-8 text-md">Will you be mine again? 🥺</p>

                <div className="relative h-40 w-full flex items-center justify-center">
                    <button
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full text-2xl font-bold shadow-lg hover:from-green-600 hover:to-green-700 hover:scale-110 transform transition-all duration-300"
                        onClick={() => {
                            window.location.href = '/celebration';
                        }}
                    >
                        YES! 💕
                    </button>
                    <button
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg absolute"
                        style={noButtonStyle}
                        onMouseEnter={moveNoButton}
                        onClick={moveNoButton}
                    >
                        No
                    </button>
                </div>

                <p className="mt-8 text-lg text-pink-600 text-center font-semibold animate-pulse">
                    Hint: The &quot;No&quot; button is as elusive as you when I try to wake you up! &#39;💤
                </p>
                <div className="mt-6 text-center">
                    <a href="/love-note" className="text-pink-700 underline hover:text-pink-500 text-lg transition-colors">
                        📝 Read my heart out (I promise it&#39;s sweeter than gulab jamun 🍮)
                    </a>
                </div>
            </div>
        </div>
    );
}
