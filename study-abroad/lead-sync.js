/**
 * GESP Lead Submission Handler
 * Syncs leads from both index.html (modal) and contact.html directly into Google Sheets.
 */

// Google Apps Script Web App URL for Google Sheet Lead Sync
const GESP_GOOGLE_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzsBYzicgPphMbZhFIdNgDoM2Z4_2KU4fxHXTIP4fgwXWRf_t2YUhvRGuUQ4dHM-gZxbQ/exec';

async function submitGespLead(formData, sourceName) {
  const payload = {
    timestamp: new Date().toISOString(),
    source: sourceName,
    role: formData.get('role') || '',
    help_topics: formData.getAll('help_topics'),
    name: formData.get('name') || '',
    email: formData.get('email') || '',
    phone: formData.get('phone') || '',
    city: formData.get('city') || '',
    intake: formData.get('intake') || ''
  };

  console.log('[GESP Lead Capture]', payload);

  if (GESP_GOOGLE_SHEET_WEBAPP_URL) {
    try {
      await fetch(GESP_GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors', // Avoids CORS errors with Google Apps Script
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Google Sheet submission warning:', err);
    }
  }

  return payload;
}
