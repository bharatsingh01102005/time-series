require('dotenv').config();

// ==============================================
// Sets up middleware, routes, and backend services
// ==============================================

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
console.log("apiworking");

const connectDB = require('./config/db');
const metricRoutes = require('./routes/metricRoutes');
const startMockDataStream = require('./utils/mockDataGenerator');

const app = express();

// Connect Database
connectDB();

// Start mock data only in development
if (process.env.NODE_ENV === 'development') {
    startMockDataStream();
}

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Simple health check (NEW ✅)
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Routes
app.use('/api/metrics', metricRoutes);

// Better error handling (simple version)
// Global error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});