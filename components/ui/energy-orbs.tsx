"use client"

export function EnergyOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large pulsing energy orbs */}
      <div
        className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, #FF6A00 0%, #FFC300 50%, transparent 70%)",
          animationDuration: "4s",
        }}
      />

      <div
        className="absolute top-40 right-32 w-24 h-24 rounded-full opacity-25 animate-pulse"
        style={{
          background: "radial-gradient(circle, #FFC300 0%, #FFE066 50%, transparent 70%)",
          animationDuration: "3s",
          animationDelay: "1s",
        }}
      />

      <div
        className="absolute bottom-32 left-40 w-40 h-40 rounded-full opacity-15 animate-pulse"
        style={{
          background: "radial-gradient(circle, #FFA733 0%, #FF6A00 50%, transparent 70%)",
          animationDuration: "5s",
          animationDelay: "2s",
        }}
      />

      <div
        className="absolute bottom-20 right-20 w-28 h-28 rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, #FFE066 0%, #FFA733 50%, transparent 70%)",
          animationDuration: "3.5s",
          animationDelay: "0.5s",
        }}
      />

      {/* Rotating energy rings */}
      <div
        className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-orange-300 rounded-full opacity-30 animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/2 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-40 animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      />

      {/* Energy waves */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-orange-200 opacity-20 animate-ping"
          style={{
            transform: "translate(-50%, -50%)",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-yellow-300 opacity-25 animate-ping"
          style={{
            transform: "translate(-50%, -50%)",
            animationDuration: "3s",
            animationDelay: "1s",
          }}
        />
      </div>
    </div>
  )
}
