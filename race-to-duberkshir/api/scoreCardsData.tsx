import { google } from 'googleapis';

    export async function getPlayersScoresData() {

    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
    const sheets = google.sheets({version: 'v4', auth});

    const range = `playerInfoDb!A1:K50`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    const playersInfo = response.data.values;

    return playersInfo
    }

    