🔥 Kiln Dashboard

A real-time kiln temperature monitoring system built for ceramic firing workflows.

Live demo: https://kiln-dashboard.vercel.app/

📡 System Overview

ESP32 reads temperature from a Type S thermocouple and streams it to a live dashboard.

ESP32 → ThingSpeak → Next.js API → React Dashboard

⚙️ Features
Real-time kiln temperature display
Historical temperature graph (Plotly)
Automatic polling (30s interval)
Server-side API proxy (no exposed secrets)
Auto-deploy via Vercel
🧠 Architecture

ESP32 (Arduino)
→ ThingSpeak
→ Next.js API route (/api/kiln)
→ React hook (useKiln)
→ UI dashboard

🛠 Tech Stack
Next.js 15 (App Router)
React
TypeScript
Tailwind CSS
Plotly.js
ESP32 (Arduino)
ThingSpeak API
Vercel
🔐 Security
No API keys exposed in frontend
ThingSpeak access handled server-side
Secrets stored in .env.local and Vercel env vars
📊 Data Source

Type S thermocouple via MAX31856 on ESP32.

🚀 Deployment
Push to main → auto deploy on Vercel
Environment variables configured in Vercel dashboard
🧪 Status

MVP stage:

Live temperature tracking
Basic historical graph
Stable polling system
📸 Future Ideas
Kiln phase detection (heat / soak / cool)
Session logging
Mobile UI
Alerts
Multi-kiln support
🧑‍🎨 Why this exists

Experimental system combining ceramics, electronics, and software into a live physical computing dashboard.
