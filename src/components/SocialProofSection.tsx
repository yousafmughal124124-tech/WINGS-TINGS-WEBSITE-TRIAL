import React from 'react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0d] relative overflow-hidden border-t border-b border-zinc-900">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>Real Customer Love</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none">
              The Tingz Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Talking</span>.
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
            <div className="text-right">
              <div className="text-2xl font-black text-white font-mono leading-none">4.8 / 5</div>
              <div className="text-[11px] text-zinc-400 mt-1">112 Google Reviews</div>
            </div>

            <div className="h-10 w-[1px] bg-zinc-800" />

            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-zinc-400 mt-1">Verified Ratings</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <MessageSquareQuote className="w-5 h-5 text-zinc-700" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-zinc-200 leading-relaxed font-normal mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification (Clean unboxed text) */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-bold text-white text-xs">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-white block">{rev.author}</span>
                    <span className="text-[11px] text-zinc-400">{rev.date}</span>
                  </div>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-12 text-center">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-orange-400 transition-colors"
          >
            <span>Read all 112 Google Reviews for Wings &amp; Tingz Lahore</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
