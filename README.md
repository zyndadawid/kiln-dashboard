# 🔥 Kiln Dashboard

Real-time kiln temperature monitoring system for ceramic firing workflows.

🚀 Live: https://kiln-dashboard.vercel.app/

---

## 📡 System Overview

This project connects a kiln to a live web dashboard:

ESP32 → ThingSpeak → Next.js API → React Dashboard

It streams temperature data from a Type S thermocouple and visualizes it in real time.

---

## ⚙️ Features

- Live kiln temperature display
- Historical temperature graph (Plotly)
- Auto-refresh every 30 seconds
- Server-side API proxy (no exposed API keys)
- Deployed on Vercel with auto CI/CD

---

## 🧠 Architecture

- ESP32 (Arduino)
- ↓
- ThingSpeak (IoT channel)
- ↓
- Next.js API (/api/kiln)
- ↓
- React Hook (useKiln)
- ↓
- Dashboard UI

---

## 🛠 Tech Stack

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Plotly.js
- ESP32 (Arduino)
- ThingSpeak API
- Vercel

---

## 🔐 Security Model

- No API keys exposed in frontend
- ThingSpeak accessed only via server-side API route
- Secrets stored in `.env.local` and Vercel environment variables

---

## 📊 Data Source

Temperature is measured using a Type S thermocouple connected to a MAX31856 module on ESP32.

Data is sent to ThingSpeak and fetched via API.

---

## 🚀 Deployment

- Push to `main` branch → automatic Vercel deployment
- Environment variables configured in Vercel dashboard

---

## 🧪 Current Status

MVP stage:

- Live temperature monitoring
- Basic chart visualization
- Stable polling system

---

## 📸 Future Improvements

- Kiln phase detection (heating / soaking / cooling)
- Session-based firing logs
- Mobile-first UI
- Alerts for peak temperature
- Multi-kiln support

---

## 🧑‍🎨 Why this exists

An experimental system combining ceramics, electronics, and software into a live physical computing dashboard.
