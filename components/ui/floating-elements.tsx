"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <div
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-1 h-1 bg-purple-300 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "2.5s" }}
      />

      {/* Floating shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-8 h-8 border border-blue-200 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-6 h-6 border border-purple-200 rounded-full animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl opacity-30 animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
