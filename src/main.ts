import * as fs from 'fs';
import * as path from 'path';
import { findCircularChain } from './wordChain';

function readWordsFromFile(filePath: string): string[] {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  const content = fs.readFileSync(absolutePath, 'utf-8');
  return content
    .split('\n')
    .map(word => word.trim())
    .filter(word => word.length > 0);
}

function writeResultToFile(outputPath: string, words: string[]): void {
  const content = words.join('\n');
  fs.writeFileSync(outputPath, content, 'utf-8');
}

function main(): void {
  const inputFile = process.argv[2] || 'input.txt';
  const outputFile = process.argv[3] || 'output.txt';

  try {
    const words = readWordsFromFile(inputFile);
    const result = findCircularChain(words);

    writeResultToFile(outputFile, result);

    if (result.length > 0) {
      console.log('✓ Cadena circular encontrada');
      console.log(`✓ Resultado guardado en ${outputFile}`);
    } else {
      console.log('✗ No se encontró ninguna cadena circular');
      console.log(`✓ Archivo ${outputFile} creado (vacío)`);
    }
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}