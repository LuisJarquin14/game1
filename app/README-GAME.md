# Truth or Dare Game 🎮

Un juego moderno de Truth or Dare (Verdad o Reto) construido con React, TypeScript y Tailwind CSS. Diseñado para ser jugado en navegadores web con una interfaz intuitiva tipo cartas físicas.

## 🎯 Características

- **4 Modos de Juego**:
  - **Familiar** (13+): Diversión para toda la familia
  - **Amigos** (16+): Para grupos de amigos
  - **Adultos** (18+): Solo para mayores de edad
  - **Parejas** (18+): Intimidad entre dos personas

- **Interfaz Moderna**:
  - Diseño responsive (móvil y desktop)
  - Cartas con animaciones 3D
  - Tema oscuro con gradientes
  - Efectos de hover y transiciones suaves
  - Configuración paso a paso interactiva

- **Funcionalidades Avanzadas**:
  - Configuración de jugadores con nombres y avatares
  - Sistema de dificultad personalizable (1-5 estrellas)
  - Validación de edad robusta para contenido +18
  - Cartas aleatorias sin repetición
  - Contador de cartas usadas/restantes
  - Animaciones fluidas con Framer Motion
  - Turnos automáticos entre jugadores

## 🚀 Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Lucide React** para iconos

## 📱 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone [repository-url]
   cd truth-or-dare-game
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

## 🎮 Cómo Jugar

1. **Selecciona un modo de juego** según la edad y tipo de grupo
2. **Configura los jugadores** añadiendo nombres y eligiendo avatares
3. **Personaliza la dificultad** y tipo de cartas (verdades/retos)
4. **Para modos +18**: Verifica la edad y da consentimiento
5. **Toca la carta** para revelar el contenido
6. **Cumple con el desafío** o responde la pregunta
7. **Presiona "Siguiente Carta"** para continuar con el siguiente jugador
8. **Usa "Reiniciar"** para volver a barajar las cartas

## 🔧 Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── TruthOrDareGame.tsx    # Componente principal
│   ├── GameModeSelector.tsx   # Selector de modos
│   ├── GameSetup.tsx          # Configuración paso a paso
│   └── GameBoard.tsx          # Tablero del juego
├── data/              # Datos del juego
│   └── cards.ts       # Cartas por categoría
├── types/             # Tipos TypeScript
│   └── game.ts        # Interfaces del juego
├── hooks/             # Hooks personalizados
└── utils/             # Utilidades
```

## 🎨 Personalización

### Agregar Nuevas Cartas

Edita el archivo `src/data/cards.ts` para agregar nuevas cartas:

```typescript
{
  id: 'unique-id',
  type: 'truth' | 'dare',
  content: 'Tu pregunta o reto aquí',
  category: 'family' | 'friends' | 'adults' | 'couples',
  difficulty: 1 | 2 | 3 | 4 | 5,
  isAdult: true, // Solo para contenido 18+
  tags: ['etiqueta1', 'etiqueta2']
}
```

### Modificar Estilos

Los estilos están en:
- `src/index.css` - Estilos globales y componentes
- `tailwind.config.js` - Configuración de Tailwind

### Personalizar Avatares

Edita el array `avatarOptions` en `GameSetup.tsx`:

```typescript
const avatarOptions = [
  '🎮', '🎯', '🎲', '🎪', '🎭', '🎨', '🎧', '🎤',
  // Añade más emojis aquí
];
```

## ✨ Características Interactivas

- **Configuración Paso a Paso**: Proceso guiado para configurar el juego
- **Selección de Avatares**: Cada jugador puede elegir su emoji favorito
- **Validación de Edad**: Sistema robusto para contenido adulto
- **Indicadores de Progreso**: Barra de progreso y pasos visuales
- **Animaciones Fluidas**: Transiciones suaves entre pasos
- **Responsive Design**: Optimizado para móviles y desktop

## 🚧 Próximas Características

- [ ] Integración con Firebase para multijugador
- [ ] Sistema de puntuación
- [ ] Más categorías de cartas
- [ ] Personalización de avatares con imágenes
- [ ] Modo cronómetro
- [ ] Estadísticas de juego
- [ ] Sonidos y efectos
- [ ] Modo offline

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ⚠️ Advertencias

- Los modos "Adultos" y "Parejas" contienen contenido para mayores de 18 años
- Juega responsablemente y respeta los límites de todos los participantes
- Este juego es solo para entretenimiento
- Se requiere verificación de edad para acceder al contenido adulto

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS
