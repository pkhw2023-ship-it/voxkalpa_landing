import { put } from '@vercel/blob';

export default async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const payload = req.body;

        // Basic validation
        if (!payload.name || !payload.email || !payload.useCases) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Generate a unique filename: leads/YYYY-MM-DD/timestamp_email.json
        const date = new Date();
        const folderDate = date.toISOString().split('T')[0];
        const timestamp = date.getTime();
        const safeEmail = payload.email.replace(/[^a-zA-Z0-9]/g, '_');
        const filename = `leads/${folderDate}/${timestamp}_${safeEmail}.json`;

        // Write to Vercel Blob
        const blob = await put(filename, JSON.stringify(payload, null, 2), {
            access: 'private',
            token: process.env.BLOB_READ_WRITE_TOKEN,
            contentType: 'application/json',
        });

        // Return success response with blob details (excluding token)
        return res.status(200).json({ success: true, url: blob.url });
    } catch (error) {
        console.error('Blob upload error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
