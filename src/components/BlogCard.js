import React from 'react';
import { ExternalLink } from 'lucide-react';

const BlogCard = ({ post }) => (
  <a
    href={post.url || "#"}
    className="group flex flex-col h-full glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 dark:hover:shadow-brand-primary/5 hover:border-brand-primary/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary dark:text-brand-accent text-xs font-bold uppercase tracking-wide rounded-full">
        {post.category}
      </span>
      <span className="text-gray-400 dark:text-gray-500 text-xs font-mono">{post.date}</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors leading-tight">
      {post.title}
    </h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
      {post.desc}
    </p>
    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{post.source}</span>
      <ExternalLink className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors" />
    </div>
  </a>
);

export default BlogCard;
