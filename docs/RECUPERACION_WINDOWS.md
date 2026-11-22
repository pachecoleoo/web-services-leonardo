# Recuperación del entorno de desarrollo en Windows

Los errores `ERR_INVALID_PACKAGE_CONFIG`, `UNKNOWN: unknown error, read` o `Failed to open database / loading persistence directory failed` pueden producirse por archivos de dependencias o caché dañados, especialmente si la carpeta se ejecuta dentro de OneDrive. No implican por sí solos que los componentes del sitio estén dañados.

## Instalación limpia fuera de OneDrive

1. Conservar la carpeta original como respaldo. No borrarla.
2. Abrir PowerShell y ejecutar:

```powershell
New-Item -ItemType Directory -Force C:\Proyectos
Set-Location C:\Proyectos
git clone https://github.com/pachecoleoo/web-services-leonardo.git
Set-Location .\web-services-leonardo
npm ci
npm run dev
```

3. Abrir http://localhost:3000 en el navegador.

Si Turbopack vuelve a fallar, usar `npm run dev:webpack` **después de incorporar esta rama**. Sin incorporar la rama, se puede ejecutar `npm run dev -- --webpack` directamente.

## Si falla la instalación

Con el servidor detenido y **solamente dentro de la copia nueva**:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm ci
npm run dev -- --webpack
```

No ejecutar estos comandos dentro de la carpeta original de OneDrive. Si continúa el fallo, compartir el mensaje completo de error antes de modificar configuraciones o dependencias.

## Validación

```powershell
npm run lint
npm run build
```

Este procedimiento corrige el *entorno local*, no asegura que no existan otros errores de compilación. El archivo `package-lock.json` se conserva para instalaciones reproducibles.
