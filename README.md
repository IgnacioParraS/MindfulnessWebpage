# Mindfulness webpage

# 📖 Guía de Referencia Rápida - Componentes

## 🎯 Componentes UI (Reutilizables)

### Button.jsx
**¿Qué hace?** Botón personalizado con efectos y variantes

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `onClick`: función a ejecutar al hacer click
- `className`: clases adicionales de Tailwind

**Ejemplo:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Descargar gratis
</Button>
```

---

### FloatingOrb.jsx
**¿Qué hace?** Orbe decorativo flotante con animación

**Props:**
- `className`: clases de Tailwind (posición, tamaño, color)
- `delay`: segundos de retraso para la animación (default: 0)

**Ejemplo:**
```jsx
<FloatingOrb className="w-96 h-96 bg-sage-300 -top-48 -left-48" delay={2} />
```

---

### SectionTitle.jsx
**¿Qué hace?** Título de sección con animación de entrada

**Props:**
- `children`: texto del título (puede incluir JSX)
- `subtitle`: texto opcional debajo del título
- `light`: usa colores claros (default: false)
- `center`: centra el texto (default: true)

**Ejemplo:**
```jsx
<SectionTitle subtitle="Un subtítulo aquí">
  Mi título <span className="text-sage-600">destacado</span>
</SectionTitle>
```

---

## 📄 Secciones de la Página

### HeroSection.jsx
**¿Qué hace?** Banner principal con título, CTA y libro

**Props:**
- `onScrollToForm`: función para scroll al formulario
- `config`: objeto con info del autor y libro

**Características:**
- Efecto parallax en el libro
- Badges flotantes animados
- Botones de CTA
- Social proof

---

### BenefitsSection.jsx
**¿Qué hace?** Muestra los 3 beneficios principales

**Props:**
- `benefits`: array de objetos con { id, title, description, icon }

**Características:**
- Grid de 3 columnas
- Animación al hacer scroll
- Cards con hover effect

---

### GallerySection.jsx
**¿Qué hace?** Galería de 3 imágenes

**Props:** Ninguno (las imágenes están hardcodeadas)

**Características:**
- Grid de 3 columnas responsive
- Efecto zoom al hover
- Animación al aparecer

---

### CTABanner.jsx
**¿Qué hace?** Banner motivacional con llamado a la acción

**Props:**
- `onScrollToForm`: función para scroll al formulario

**Características:**
- Fondo con gradiente y parallax
- Orbes flotantes decorativos
- Botón CTA

---

### PainPointsSection.jsx
**¿Qué hace?** Muestra los 3 problemas que resuelve el manual

**Props:**
- `painPoints`: array de objetos con { id, title, description, image }

**Características:**
- Layout alternado (imagen izq/der)
- Animaciones al scroll
- Colores decorativos diferentes por item

---

### TestimonialsSection.jsx
**¿Qué hace?** Testimonios de clientes satisfechos

**Props:**
- `testimonials`: array de objetos con { id, text, author, role }

**Características:**
- Grid de 3 columnas
- Cards con comillas decorativas
- Animación escalonada

---

### AboutSection.jsx
**¿Qué hace?** Sección sobre la autora con foto y bio

**Props:**
- `config`: objeto con info del autor y libro

**Características:**
- Layout 2 columnas
- Foto con decoraciones
- Texto biográfico

---

### FormSection.jsx
**¿Qué hace?** Formulario de captura de leads

**Props:**
- `formRef`: referencia para hacer scroll

**Características:**
- Validación de email
- Estado de loading
- Mensaje de éxito
- Simula envío (cambiar por API real)

---

### Footer.jsx
**¿Qué hace?** Pie de página con info de contacto

**Props:**
- `config`: objeto con info del autor

**Características:**
- Fondo con imagen
- Redes sociales
- Links legales

---

## 🎨 Hooks Personalizados (dentro de componentes)

### useIntersectionObserver()
**¿Dónde está?** En varios componentes de secciones

**¿Qué hace?** Detecta cuando un elemento es visible en pantalla

**Retorna:** `[ref, isVisible]`
- `ref`: asignar al elemento a observar
- `isVisible`: true cuando el elemento es visible

---

### useParallax(speed)
**¿Dónde está?** HeroSection, CTABanner

**¿Qué hace?** Crea efecto parallax en scroll

**Parámetro:** `speed` - velocidad del efecto (0.1 - 1.0)

**Retorna:** `offset` - valor para translateY

---

## 📊 Datos en MainPage.jsx

### CONFIG
Información del autor y libro
```js
{
  author: { name, title, instagram, image },
  book: { title, subtitle, image }
}
```

### BENEFITS
Array de beneficios (3 items)
```js
{ id, title, description, icon }
```

### PAIN_POINTS
Array de problemas (3 items)
```js
{ id, title, description, image }
```

### TESTIMONIALS
Array de testimonios (3 items)
```js
{ id, text, author, role }
```

---

## 🔧 Tips de Personalización

### Cambiar colores:
- Busca clases como `bg-sage-500`, `text-lavender-600`
- Los colores son: sage (verde), lavender (morado), peach (durazno), stone (gris), cream (crema)

### Cambiar animaciones:
- Busca `duration-700`, `delay-300` para ajustar tiempos
- Busca `translate-y-12`, `scale-110` para ajustar movimientos

### Agregar nueva sección:
1. Crea archivo en `components/homepage/sections/NuevaSeccion.jsx`
2. Importa en `MainPage.jsx`
3. Agrégala en el return de MainPage

### Mover datos a archivo separado:
1. Crea `components/homepage/data/config.js`
2. Exporta CONFIG, BENEFITS, etc.
3. Importa en MainPage.jsx

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué los hooks están dentro de los componentes?**
R: Para mantenerlo simple. Si los usas en varios lugares, créalos como archivos separados.

**P: ¿Puedo reutilizar estos componentes UI en otras páginas?**
R: ¡Sí! Ese es el objetivo. Solo ajusta las rutas de import.

**P: ¿Cómo agrego más beneficios?**
R: Edita el array `BENEFITS` en MainPage.jsx y agrega más objetos.

**P: ¿El formulario funciona?**
R: Actualmente simula el envío. Conecta tu API en FormSection.jsx línea ~73.