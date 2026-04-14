const express = require('express');
const router = express.Router();

// ==============================================
// Connects API endpoints with controller logic
// ==============================================

const {
    ingestMetrics,
    getRealtimeMetrics,
    getHourlyMetrics,
    getDailyMetrics
} = require('../controllers/metricController');

// Route to ingest new metrics
router.route('/')
    .post(ingestMetrics);

// Route for real-time metrics
    router.route('/realtime')
    .get(getRealtimeMetrics);

// Route for hourly aggregated data
    router.route('/hourly')
    .get(getHourlyMetrics);

// Route for daily aggregated data
    router.route('/daily')
    .get(getDailyMetrics);

module.exports = router;
