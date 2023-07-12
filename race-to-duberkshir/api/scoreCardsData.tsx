import { google } from 'googleapis';

    export async function getScoreCardsData() {

    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
    const sheets = google.sheets({version: 'v4', auth});

    const range = `playerScores!A1:R50`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    const scores = response.data.values;

    return scores
    }

    