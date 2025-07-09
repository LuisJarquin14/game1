# 🎮 Truth or Dare Game

Juego interactivo de Verdad o Reto construido con React, TypeScript, Vite y Firebase.

## 🌟 Características

- Diseño responsivo adaptado para dispositivos móviles y de escritorio
- Múltiples modos de juego: Familiar, Amigos, Adultos y Parejas
- Animaciones fluidas con Framer Motion
- Almacenamiento de estadísticas con Firebase
- Personalización de jugadores y opciones de juego

## 🛠️ Tecnologías

- **Frontend**: React + TypeScript + Tailwind CSS
- **Build**: Vite
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore, Hosting, Analytics)
- **Icons**: Lucide React

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la build
npm run preview
```

## 📱 Despliegue

La aplicación está desplegada en Firebase Hosting:

- **URL de producción**: [https://truth-or-dare-game-3e871.web.app](https://truth-or-dare-game-3e871.web.app)

Para más detalles sobre el despliegue, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🔥 Configuración de Firebase

Este proyecto utiliza Firebase para backend. Para configurar tu propio proyecto:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Configura Firestore Database
3. Actualiza las credenciales en `src/config/firebase.ts`

Para instrucciones detalladas, revisa [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).
## 🧩 Estructura del Proyecto

```
app/
├── public/              # Archivos públicos
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes React
│   ├── config/          # Configuración (Firebase, etc.)
│   ├── data/            # Datos de juego (preguntas/retos)
│   ├── hooks/           # Custom hooks
│   ├── types/           # Definiciones de TypeScript
│   ├── utils/           # Utilidades y funciones auxiliares
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── DEPLOYMENT.md        # Guía de despliegue
├── FIREBASE_SETUP.md    # Instrucciones de configuración de Firebase
└── README.md            # Este archivo
```

## 📊 CI/CD

Para habilitar despliegue automático al hacer push a `main`, consulta las instrucciones en [DEPLOYMENT.md](./DEPLOYMENT.md) sobre cómo configurar GitHub Actions.

## 📜 Licencia

Este proyecto está bajo la licencia MIT.
```
