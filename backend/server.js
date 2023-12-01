// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Replace the following with your MongoDB connection string
const mongoURI = "mongodb+srv://radhesh1:devchut@cluster0.bw0bpat.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose schema for the stats data
const statsSchema = new mongoose.Schema({
    academic: Number,
    societies: Number,
    friends: Number,
    fun: Number,
    // Add other relevant data
});

const socialsSchema = new mongoose.Schema({
    userId: String,
    linkedin: String,
    instagram: String,
    snapchat: String,
    phoneNumber: String,
    // Add other relevant data
});

const StatsModel = mongoose.model('Stats', statsSchema);
const SocialsModel = mongoose.model('Socials', socialsSchema);

// API endpoint to store stats data
app.post('/api/storeStatsData', async (req, res) => {
    const { academic, societies, friends, fun } = req.body;

    try {
        const statsData = new StatsModel({
            academic,
            societies,
            friends,
            fun,
            // Add other relevant data
        });

        await statsData.save();

        res.json({ success: true, message: 'Stats data stored successfully' });
    } catch (error) {
        console.error('Error storing stats data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// API endpoint to save socials data
app.post('/api/saveSocials', async (req, res) => {
    const { userId, linkedin, instagram, snapchat, phoneNumber } = req.body;

    try {
        const socialsData = new SocialsModel({
            userId,
            linkedin,
            instagram,
            snapchat,
            phoneNumber,
            // Add other relevant data
        });

        await socialsData.save();

        res.json({ success: true, message: 'Socials data saved successfully' });
    } catch (error) {
        console.error('Error saving socials data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
