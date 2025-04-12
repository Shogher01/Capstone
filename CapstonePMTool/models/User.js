const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date },
    profileImage: { type: String },
    boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    settings: {
        theme: { type: String, default: 'light' },
        notifications: { type: Boolean, default: true }
    },
    calendarIntegration: {
        googleCalendarId: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
