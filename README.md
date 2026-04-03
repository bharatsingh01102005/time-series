# 📈 Time Series Monitoring System

A **production-ready full-stack monitoring dashboard** built using the MERN stack to track and visualize real-time system metrics like CPU usage, Memory consumption, Temperature, Visitors, and Uptime with dynamic charts and live updates.

---

## 🚀 Features

* 📡 Real-time metrics monitoring (CPU, Memory, Temperature, Visitors, Uptime)
* 📊 Interactive data visualization with charts
* 🔄 REST API for ingesting system metrics
* ⏱️ Time-series data storage using MongoDB
* 🧹 Automated cleanup of old data (30+ days)
* ⚡ Fast frontend powered by Vite
* 📈 Scalable architecture (client-server separation)

---

## 🏗️ Tech Stack

### Frontend

* React.js (Vite)
* Chart.js
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Tools & Utilities

* Shell scripting
* REST APIs

---

## 📂 Project Structure

```
time-series-monitor/
│
├── client/          # React frontend (Vite + Chart.js)
│
├── server/          # Backend (Node.js + Express + MongoDB)
│   ├── src/
│   ├── scripts/
│   │   └── cleanup.sh
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Prerequisites

* Node.js (v16 or higher)
* MongoDB running locally at:

  ```
  mongodb://localhost:27017
  ```

---

### 2️⃣ Clone the Repository

```
git clone https://github.com/your-username/time-series-monitor.git
cd time-series-monitor
```

---

### 3️⃣ Backend Setup

```
cd server
npm install
```

#### ▶️ Start Backend Server

```
npm start
```

OR

```
node src/server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 4️⃣ Frontend Setup

```
cd ../client
npm install
```

#### ▶️ Start Frontend

```
npm run dev
```

Open the URL shown in terminal (usually):

```
http://localhost:5173
```

---

## 📡 API Usage

### ➤ Add Metrics Data

**Endpoint:**

```
POST /api/metrics
```

**URL:**

```
http://localhost:5000/api/metrics
```

**Request Body:**

```json
{
  "cpuUsage": 85,
  "memoryUsage": 4096,
  "temperature": 77,
  "visitors": 150,
  "uptime": 3600
}
```

---

## 🧹 Maintenance Script

Remove records older than 30 days:

```
bash server/scripts/cleanup.sh
```

---

## 📊 Future Enhancements

* 🔌 Real-time updates using WebSockets (Socket.IO)
* 🚨 Alert system (CPU/Temperature thresholds)
* 📅 Time-range filtering (1h, 24h, 7d)
* 🔐 Authentication (JWT)
* 🐳 Docker support
* ☁️ Cloud deployment (Vercel / Render)
* 📉 Predictive analytics
* 🌙 Dark mode UI

---

## 🖼️ Screenshots

*Add your dashboard screenshots here*

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 💡 Author

Developed by **Your Name**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
