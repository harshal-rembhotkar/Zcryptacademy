import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Terminal, TrendingUp, Coffee, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white dark:from-slate-900 dark:to-slate-900 -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-300/30 dark:bg-cyan-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300/30 dark:bg-pink-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-purple-100 dark:border-slate-700 text-brand-primary dark:text-brand-accent text-sm font-bold mb-8 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-primary dark:bg-brand-accent mr-2 animate-pulse"></span>
            Anon-friendly tech education
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight animate-fade-in-up">
            Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Privacy</span> <br />
            & Zero Knowledge
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Dive deep into ZK, Rust, and privacy-preserving protocols. Clear explanations, interactive stories, and a distraction-free learning environment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link
              to="/courses"
              className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold shadow-lg shadow-brand-primary/30 hover:bg-brand-secondary hover:shadow-brand-secondary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Courses <ArrowRight size={20} />
            </Link>
            <Link
              to="/stories"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Zero Knowledge", icon: Shield, desc: "Master the fundamentals of ZK proofs.", color: "text-brand-primary" },
              { title: "Rust Lang", icon: Terminal, desc: "Build secure systems with Rust.", color: "text-brand-secondary" },
              { title: "Trends", icon: TrendingUp, desc: "Stay ahead of privacy tech trends.", color: "text-brand-accent" },
              { title: "Stories", icon: Coffee, desc: "Learn complex concepts via analogy.", color: "text-orange-500" },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl hover:border-brand-primary/30 transition-all duration-300 group hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
