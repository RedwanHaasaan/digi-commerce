// /app/not-found.js
import Link from "next/link";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import notFoundAnimation from "@/assets/404-not-found.json";

export default function NotFound() {
  return (
<main className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-xl w-full text-center">

        {/* Animation */}
        <div className="flex justify-center">
          <LottiePlayer
            animationData={notFoundAnimation}
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl font-medium text-gray-700 mt-2">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium
            hover:bg-gray-800 transition shadow-sm"
          >
            Go Home
          </Link>

          <Link
            href="/shop"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium
            hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Subtle footer text */}
        <p className="text-xs text-gray-400 mt-8">
          Error 404 • Something went missing
        </p>
      </div>
    </main>
  );
}