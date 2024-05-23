import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 // Récupérer le nom du fichier
 const fileName = path.basename(__filename);
 console.log(`Nom du fichier : ${fileName}`);

 // Récupérer l'extension du fichier
 const fileExtension = path.extname(__filename);
 console.log(`Extension du fichier : ${fileExtension}`);

 // Récupérer le répertoire parent du fichier
 const parentDirectory = __dirname;
 console.log(`Répertoire parent : ${parentDirectory}`);