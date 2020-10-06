const mongoose = require('mongoose');
const Questions = require( './seeders/questions.seeder');
const mURI = require('./config/keys').mongoURI;

const mongoURL = process.env.MONGO_URL || mURI;

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  Questions,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
