import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Copyright() {
  return (
    <div className="text-xs text-gray-500 mt-1">
      Copyright ©{' '}
      <a href="https://mui.com/" className="hover:underline text-gray-500">Sitemark</a>{' '}
      {new Date().getFullYear()}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-10 px-4 flex flex-col items-center gap-8">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between gap-8">
        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          {/* Logo o nombre */}
          <span className="text-xl font-bold text-blue-700">Sitemark</span>
          <div className="font-semibold text-sm mt-2">Join the newsletter</div>
          <div className="text-xs text-gray-500 mb-2">Subscribe for weekly updates. No spams ever!</div>
          <form className="flex gap-2 max-w-xs">
            <label htmlFor="email-newsletter" className="sr-only">Email</label>
            <input
              id="email-newsletter"
              type="email"
              autoComplete="off"
              aria-label="Enter your email address"
              placeholder="Your email address"
              className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Enlaces */}
        <div className="hidden sm:flex flex-1 justify-between gap-8">
          <div className="flex flex-col gap-1 min-w-[100px]">
            <div className="font-semibold text-sm mb-1">Product</div>
            <a href="#features" className="text-gray-500 text-sm hover:underline">Features</a>
            <a href="#" className="text-gray-500 text-sm hover:underline">Testimonials</a>
            <a href="#highlights" className="text-gray-500 text-sm hover:underline">Highlights</a>
            <a href="#pricing" className="text-gray-500 text-sm hover:underline">Pricing</a>
            <a href="#faq" className="text-gray-500 text-sm hover:underline">FAQs</a>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
            <div className="font-semibold text-sm mb-1">Company</div>
            <a href="#" className="text-gray-500 text-sm hover:underline">About us</a>
            <a href="#" className="text-gray-500 text-sm hover:underline">Careers</a>
            <a href="#" className="text-gray-500 text-sm hover:underline">Press</a>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
            <div className="font-semibold text-sm mb-1">Legal</div>
            <a href="#" className="text-gray-500 text-sm hover:underline">Terms</a>
            <a href="#" className="text-gray-500 text-sm hover:underline">Privacy</a>
            <a href="#" className="text-gray-500 text-sm hover:underline">Contact</a>
          </div>
        </div>
      </div>
      {/* Línea y redes */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6 gap-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="mx-1 opacity-50">•</span>
          <a href="#" className="hover:underline">Terms of Service</a>
          <Copyright />
        </div>
        <div className="flex gap-3 text-gray-500">
          <a href="https://github.com/mui" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 hover:text-blue-700 transition" />
          </a>
          <a href="https://x.com/MaterialUI" aria-label="X" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-5 h-5 hover:text-blue-700 transition" />
          </a>
          <a href="https://www.linkedin.com/company/mui/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-5 h-5 hover:text-blue-700 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
