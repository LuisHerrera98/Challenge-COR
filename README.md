# Challenge COR - Cadena de Palabras Circular

## ¿Qué hace?

Encuentra una cadena circular de palabras donde:
- Cada palabra empieza con la última letra de la anterior
- La última palabra termina con la primera letra de la primera (forma un círculo)
- Cada palabra se usa exactamente una vez

## Mi enfoque

La solución prueba diferentes puntos de inicio para encontrar cualquier cadena circular válida. Si existe más de una solución, devuelve la primera que encuentra (cualquiera es correcta según el challenge).

## Instalación y ejecución

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar el programa:
```bash
npm start
```

3. Correr los tests:
```bash
npm test
```

## Uso

El programa lee de `input.txt` y escribe el resultado en `output.txt`.

### Ejemplo 1 - Con solución:
**input.txt:**
```
chair
height
racket
touch
tunic
```

**output.txt:**
```
chair
racket
touch
height
tunic
```

### Ejemplo 2 - Sin solución:
**input.txt:**
```
apple
banana
```

**output.txt:** (archivo vacío)

## Estructura

- `src/main.ts` - Lee input.txt y escribe output.txt
- `src/wordChain.ts` - Algoritmo que encuentra la cadena circular
- `tests/wordChain.test.ts` - Tests unitarios