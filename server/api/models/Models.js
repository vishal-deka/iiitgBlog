'use strict';
var mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    },
    author: {
        type: String
    }
});

module.exports = mongoose.model('blogs', blogSchema);