import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function AuthModal({ initialMode = 'login', onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab switch */}
        <div className="flex border-b border-slate-100 pb-4 mb-6">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`mr-6 pb-2 text-base font-bold transition-all relative cursor-pointer ${
              mode === 'login'
                ? 'text-[#5842ed]'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Sign In
            {mode === 'login' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5842ed] rounded-full" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`pb-2 text-base font-bold transition-all relative cursor-pointer ${
              mode === 'signup'
                ? 'text-[#5842ed]'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Create Account
            {mode === 'signup' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5842ed] rounded-full" />
            )}
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-10 space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center font-bold text-2xl">
              ✓
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              {mode === 'login' ? 'Welcome Back!' : 'Account Created!'}
            </h4>
            <p className="text-xs text-slate-500">Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#5842ed] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#5842ed] focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#5842ed] hover:bg-[#4833dd] text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/25 transition-all cursor-pointer flex items-center justify-center gap-1.5 mt-2"
            >
              <span>{mode === 'login' ? 'Sign In to Your Account' : 'Get Started Free'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSuccess(true);
                setTimeout(() => {
                  setIsSuccess(false);
                  onClose();
                }, 1000);
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Continue with GitHub</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
