const Metric = require('../models/Metric');

// ==============================================
// Handles processing of time-series data
// and sends structured API responses
// ==============================================

// @desc    Ingest new metrics
// @route   POST /api/metrics
const ingestMetrics = async (req, res) => {
    try {
        // Extracting incoming metric data from request body
        const { cpuUsage, memoryUsage, temperature, visitors, uptime } = req.body;
         console.log("Ingesting new metric data..."); // Debug log (safe)
        
        const metric = await Metric.create({
            cpuUsage,
            memoryUsage,
            temperature,
            visitors,
            uptime
        });

        res.status(201).json({ success: true, data: metric });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Get real-time metrics (latest 50)
// @route   GET /api/metrics/realtime
const getRealtimeMetrics = async (req, res) => {
    try {
        const metrics = await Metric.find().sort({ timestamp: -1 }).limit(50);
         // Reverse to maintain chronological order
        res.status(200).json({ success: true, data: metrics.reverse() });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get hourly aggregated metrics
// @route   GET /api/metrics/hourly
const getHourlyMetrics = async (req, res) => {
    try {
        const metrics = await Metric.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: "$timestamp" },
                        month: { $month: "$timestamp" },
                        day: { $dayOfMonth: "$timestamp" },
                        hour: { $hour: "$timestamp" }
                    },
                    avgCpu: { $avg: "$cpuUsage" },
                    avgMem: { $avg: "$memoryUsage" },
                    avgTemp: { $avg: "$temperature" },
                    totalVisitors: { $sum: "$visitors" }
                }
            },
            { $sort: { "_id.year": -1, "_id.month": -1, "_id.day": -1, "_id.hour": -1 } },
            { $limit: 24 }
        ]);

        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get daily aggregated metrics
// @route   GET /api/metrics/daily
const getDailyMetrics = async (req, res) => {
    try {
        const metrics = await Metric.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: "$timestamp" },
                        month: { $month: "$timestamp" },
                        day: { $dayOfMonth: "$timestamp" }
                    },
                    avgCpu: { $avg: "$cpuUsage" },
                    avgMem: { $avg: "$memoryUsage" },
                    avgTemp: { $avg: "$temperature" },
                    totalVisitors: { $sum: "$visitors" }
                }
            },
            { $sort: { "_id.year": -1, "_id.month": -1, "_id.day": -1 } },
            { $limit: 7 }
        ]);

        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    ingestMetrics,
    getRealtimeMetrics,
    getHourlyMetrics,
    getDailyMetrics
};
