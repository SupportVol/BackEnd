/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

// const functions = require('firebase-functions');
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from Firebase!');
// });

// exports.app = functions.https.onRequest(app);
