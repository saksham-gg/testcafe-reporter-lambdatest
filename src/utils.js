import axios from 'axios';

const AUTOMATION_BASE_URL = 'https://api.lambdatest.com/automation/api/v1';

export default async function updateSessionName (sessions, name) {
    const headers = {
        Authorization: `Basic ${Buffer.from(`${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}`).toString('base64')}`
    };

    for (const sessionId of sessions) {
        const url = `${AUTOMATION_BASE_URL}/sessions/${sessionId}`;
        const body = { name };
    
        try {
            await axios.patch(url, body, { headers });
        } 
        catch (error) {
            console.log('Error updating session name: ', error.message);
            throw error;
        }
    }
}
