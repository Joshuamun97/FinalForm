const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  thoughtAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
    
    get: function (timestamp) {
      const now = Date.now();
      const inMinutes = Math.floor((now - timestamp) / (1000 * 60));
      const inHours = Math.floor(inMinutes / 60);

      if (inMinutes === 0) {
        return 'just now';
      } else if (inMinutes < 60) {
        return `${inMinutes} minute${inMinutes > 1 ? 's' : ''} ago`;
      } else if (inHours < 24) {
        return `${inHours} hour${inHours > 1 ? 's' : ''} ago`;
      } else {
        const inDays = Math.floor(inHours / 24);
        return `${inDays} day${inDays > 1 ? 's' : ''} ago`;
      }
    },
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
        get: function (timestamp) {
          const now = Date.now();
          const inMinutes = Math.floor((now - timestamp) / (1000 * 60));
          const inHours = Math.floor(inMinutes / 60);
    
          if (inMinutes === 0) {
            return 'just now';
          } else if (inMinutes < 60) {
            return `${inMinutes} minute${inMinutes > 1 ? 's' : ''} ago`;
          } else if (inHours < 24) {
            return `${inHours} hour${inHours > 1 ? 's' : ''} ago`;
          } else {
            const inDays = Math.floor(inHours / 24);
            return `${inDays} day${inDays > 1 ? 's' : ''} ago`;
          }
        },
      },
    },
  ],
  likes: [
    {
      likeAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
        get: function (timestamp) {
          const now = Date.now();
          const inMinutes = Math.floor((now - timestamp) / (1000 * 60));
          const inHours = Math.floor(inMinutes / 60);
    
          if (inMinutes === 0) {
            return 'just now';
          } else if (inMinutes < 60) {
            return `${inMinutes} minute${inMinutes > 1 ? 's' : ''} ago`;
          } else if (inHours < 24) {
            return `${inHours} hour${inHours > 1 ? 's' : ''} ago`;
          } else {
            const inDays = Math.floor(inHours / 24);
            return `${inDays} day${inDays > 1 ? 's' : ''} ago`;
          }
        },
      },
    }
  ],
  likeCount: {
    type: Number,
    default: 0
  }
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
