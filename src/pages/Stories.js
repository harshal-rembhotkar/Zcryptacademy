import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';

const stories = [
  {
    id: 1,
    slug: 'mina-pasta-curves-journey',
    title: '✨ Curves That Power Privacy (Mina & Zcash)',
    category: 'Mina Protocol · Zcash',
  },
  {
    id: 2,
    slug: 'day-the-explorer-went-dark',
    title: 'The Day the Explorer Went Dark',
    category: 'Public Chains · Privacy',
  },
  {
    id: 3,
    slug: 'cafe-that-forgot-names',
    title: 'The Café That Forgot Names',
    category: 'Privacy Payments',
  },
  {
    id: 4,
    slug: 'aztec-mirror-of-choices',
    title: '🪞 The Mirror of Choices',
    category: 'AZTEC · Why Privacy Matters',
  },
  {
    id: 5,
    slug: 'osmosis-river-of-hidden-swaps',
    title: '🌊 Osmosis: The River of Hidden Swaps',
    category: 'Osmosis · Private Transactions',
  },
  {
    id: 6,
    slug: 'zcash-right-to-breathe-privately',
    title: '🌌 The Right to Breathe Privately',
    category: 'Zcash · Privacy Rights',
  },
  {
    id: 7,
    slug: 'sovereign-individual-ledger',
    title: '📜 Ledger of the Sovereign Individual',
    category: 'Zcash · Sovereignty',
  },
  {
    id: 8,
    slug: 'mina-library-of-one-page',
    title: '📚 Mina: The Library on One Page',
    category: 'Mina Protocol',
  },
  {
    id: 9,
    slug: 'aztec-privacy-puzzle',
    title: '🧩 Aztec and the Privacy Puzzle',
    category: 'AZTEC',
  },
  {
    id: 10,
    slug: 'rebellion-of-silent-transfers',
    title: '⚡ Rebellion of Silent Transfers',
    category: 'Zcash · Mina · Osmosis',
  },
  {
    id: 11,
    slug: 'secret-door-in-the-wallet',
    title: 'The Secret Door in the Wallet',
    category: 'Privacy · Zero Knowledge',
  },
  {
    id: 12,
    slug: 'aztec-market-of-quiet-voices',
    title: '🤫 Aztec: The Market of Quiet Voices',
    category: 'AZTEC',
  },
  {
    id: 13,
    slug: 'puzzle-of-the-red-door',
    title: '🧩The Puzzle of the Red Door',
    category: 'Zero Knowledge Basics',
  },
  {
    id: 14,
    slug: 'passport-without-a-face',
    title: '⚡The Passport Without a Face',
    category: 'ZK Identity',
  },
  {
    id: 15,
    slug: 'teacher-and-transparent-class',
    title: '📚The Teacher and the Transparent Class',
    category: 'Education · ZK',
  },
  {
    id: 16,
    slug: 'whisper-network',
    title: '⚡The Whisper Network',
    category: 'Mutual Aid · Privacy',
  },
  {
    id: 17,
    slug: 'verifiable-privacy-zcash-mina-city',
    title: '🛡️ Verifiable Privacy in New Harbor',
    category: 'Mina Protocol · Zcash',
  }
];

const Stories = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/stories/${slug}`);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold mb-8 border border-purple-100 dark:border-purple-800 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive Learning
          </div>
          <h1 className="text-5xl font-display font-extrabold text-gray-900 dark:text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Learn complex concepts through analogies and narratives. No dry theory, just stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-200">
          {stories.map(({ id, title, category, slug }) => (
            <div
              key={id}
              onClick={() => handleClick(slug)}
              className="group cursor-pointer glass-panel p-8 rounded-3xl hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={100} />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wide rounded-full mb-4">
                  {category.split('·')[0]}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {category}
                </p>
                <div className="flex items-center text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                  Read Story <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
