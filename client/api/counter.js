import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const dataPath = path.join(process.cwd(), 'public', 'data.json');
  
  try {
    // Read current data
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    let data = JSON.parse(fileContent);

    if (req.method === 'POST') {
      const { type, button } = req.query;

      if (type === 'view') {
        data.views += 1;
      } else if (type === 'click' && button && data.buttons.hasOwnProperty(button)) {
        data.buttons[button] += 1;
      }

      // Write updated data back
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
    }

    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to update counter' });
  }
}
