# 🎮 Truth or Dare Game - Configuración de Firebase

## 📋 Pasos para configurar Firebase

### 1. Crear un proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear un proyecto"
3. Nombra tu proyecto (ej: "truth-or-dare-game")
4. Habilita Google Analytics (opcional)
5. Acepta los términos y crea el proyecto

### 2. Configurar la aplicación web

1. En el dashboard de Firebase, haz clic en "Agregar aplicación"
2. Selecciona el icono web (</>) 
3. Registra tu aplicación con un nombre (ej: "Truth or Dare Web App")
4. Habilita Firebase Hosting (opcional)
5. Copia la configuración que aparece

### 3. Configurar Firestore Database

1. Ve a "Firestore Database" en el menú lateral
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba" (para desarrollo)
4. Elige una ubicación para tu base de datos
5. Haz clic en "Listo"

### 4. Configurar las reglas de seguridad

En Firestore, ve a "Reglas" y reemplaza el contenido con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite lectura y escritura para las sesiones de juego
    match /gameSessions/{document} {
      allow read, write: if true;
    }
    
    // Permite lectura y escritura para estadísticas
    match /gameStats/{document} {
      allow read, write: if true;
    }
  }
}
```

### 5. Actualizar la configuración en el código

1. Abre el archivo `src/config/firebase.ts`
2. Reemplaza los valores placeholder con tu configuración:

```typescript
const firebaseConfig = {
  apiKey: "tu-api-key-aqui",
  authDomain: "tu-project-id.firebaseapp.com",
  projectId: "tu-project-id",
  storageBucket: "tu-project-id.appspot.com",
  messagingSenderId: "tu-sender-id",
  appId: "tu-app-id",
  measurementId: "tu-measurement-id"
};
```

### 6. Verificar la configuración

1. Ejecuta `npm run dev` para iniciar el servidor de desarrollo
2. Juega una partida completa
3. Ve a Firebase Console > Firestore Database
4. Deberías ver una colección llamada "gameSessions" con datos

## 🔧 Funcionalidades implementadas

### 📊 Estadísticas del juego
- **Total de juegos jugados**: Contador de partidas completadas
- **Modo favorito**: El modo de juego más utilizado
- **Promedio de cartas por juego**: Estadística de engagement
- **Tiempo total de juego**: Tiempo acumulado jugando

### 💾 Almacenamiento de sesiones
- **Automático**: Se guarda al salir del juego
- **Datos guardados**: Modo, jugadores, cartas jugadas, dificultad, duración
- **Timestamp**: Fecha y hora de cada sesión

### 🏆 Sistema de estadísticas
- **Componente StatsComponent**: Visualización de estadísticas
- **Hook useGameStats**: Manejo de datos de Firebase
- **Leaderboard**: Ranking de jugadores más activos

## 🚀 Próximas mejoras

1. **Autenticación**: Login con Google/Facebook
2. **Multijugador**: Salas de juego online
3. **Logros**: Sistema de achievements
4. **Personalización**: Cartas personalizadas
5. **Temas**: Diferentes temas visuales
6. **Backup**: Respaldo de partidas

## 🛠️ Comandos útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar a Firebase Hosting
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📱 Características del juego

- ✅ **Responsive**: Optimizado para móviles y desktop
- ✅ **PWA Ready**: Puede instalarse como app
- ✅ **Offline Ready**: Funciona sin conexión
- ✅ **Vibración**: Feedback háptico en móviles
- ✅ **Animaciones**: Transiciones fluidas
- ✅ **Temas**: Colores por modo de juego
- ✅ **Accesibilidad**: Soporte para lectores de pantalla

## 🎯 Modos de juego

1. **👨‍👩‍👧‍👦 Familiar**: Contenido apropiado para toda la familia
2. **👥 Amigos**: Preguntas y retos divertidos entre amigos
3. **🔞 Adultos**: Contenido más atrevido para mayores de edad
4. **💕 Parejas**: Especialmente diseñado para parejas

¡Disfruta jugando Truth or Dare! 🎉
