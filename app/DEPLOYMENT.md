# 🚀 Truth or Dare Game - Guía de Despliegue

## 📋 Proceso de Build y Despliegue

### Build del Proyecto

Para generar los archivos optimizados para producción:

```bash
# En la carpeta raíz del proyecto
npm run build
```

Este comando ejecuta:
1. `tsc -b` - Compila TypeScript
2. `vite build` - Genera los archivos optimizados en la carpeta `dist`

### Despliegue en Firebase Hosting

1. **Verificar la configuración de Firebase:**
   - El archivo `firebase.json` ya está configurado correctamente
   - Apunta al directorio `dist` para hosting
   - Configura reglas de redireccionamiento para SPA

2. **Desplegar a Firebase:**
   ```bash
   # En la carpeta raíz del proyecto
   firebase deploy --only hosting
   ```

3. **URL de la aplicación desplegada:**
   - [https://truth-or-dare-game-3e871.web.app](https://truth-or-dare-game-3e871.web.app)

## 🔄 Integración Continua / Despliegue Continuo (CI/CD)

### Opción 1: Despliegue manual (actual)

Proceso actual que requiere ejecutar manualmente:
```bash
npm run build
firebase deploy --only hosting
```

### Opción 2: Configurar GitHub Actions para despliegue automático

Para implementar CI/CD y desplegar automáticamente cuando se hace merge a main:

1. **Crear archivo `.github/workflows/firebase-deploy.yml`:**

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: truth-or-dare-game-3e871
```

2. **Configurar secretos en GitHub:**
   - Ir a Settings > Secrets > Actions
   - Añadir `FIREBASE_SERVICE_ACCOUNT` con las credenciales de Firebase

3. **Generar credenciales de Firebase:**
   - Firebase Console > Project Settings > Service Accounts
   - Generar nueva clave privada
   - Guardar el JSON en el secreto de GitHub

Con esta configuración, cada vez que se haga un merge a la rama `main`, GitHub Actions construirá y desplegará automáticamente tu aplicación en Firebase Hosting.

## 📊 Monitoreo y Análisis

Firebase proporciona herramientas para monitorear tu aplicación:

- **Firebase Analytics**: Ya configurado en tu app
- **Firebase Performance**: Puedes habilitarlo para monitorear rendimiento
- **Firebase Crashlytics**: Para reportes de errores
- **Google Search Console**: Para monitorear SEO

## 🔍 Consejos para SEO y rendimiento

1. **Mejorar metadatos:**
   ```html
   <!-- En public/index.html -->
   <meta name="description" content="Juego de Verdad o Reto - Diviértete con amigos y familia">
   <meta name="keywords" content="verdad o reto, juego, diversión, amigos, familia">
   ```

2. **Optimizar imágenes:**
   - Comprimir imágenes
   - Utilizar formatos modernos (WebP)

3. **Lazy loading:**
   - Implementar carga diferida para componentes pesados
   - Usar React.lazy() para code splitting

4. **PWA:**
   - Configurar service worker
   - Crear manifest.json
   
## 🔮 Próximos pasos

1. Configurar dominio personalizado
2. Implementar pruebas automatizadas
3. Configurar análisis de rendimiento
4. Optimizar bundle size mediante code splitting

¡Tu aplicación está desplegada y lista para usar! 🎉
