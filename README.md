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
