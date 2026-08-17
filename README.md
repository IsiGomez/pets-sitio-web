# Pets - Sitio web
Sitio web desarrollado para el curso **DSY1104 (Desarrollo Full Stack II)**,
a partir de la actividad **Guía 1.1.3: Explorando HTML**.

## Contexto de la actividad
Un negocio minorista de venta de artículos para mascotas necesita un sitio web
que muestre sus productos y servicios, y dé a conocer su marca en Chile.

## Estructura del sitio
El sitio está dividido en páginas independientes, conectadas mediante un menú
de navegación presente en todas ellas:

- `inicio.html` — Página principal, con presentación de la marca y video institucional.
- `historia.html` — Historia y origen del negocio.
- `sucursal.html` — Ubicación, horario de atención y servicios disponibles en tienda.
- `productos-servicios.html` — Catálogo de productos/servicios y formulario de cotización.

## Funcionalidades

- Navegación entre páginas mediante un menú (`<nav>`) presente en todo el sitio.
- Video institucional embebido en la página de inicio.
- Formulario de cotización/reserva de hora (`productos-servicios.html`) con
  validación en JavaScript (`validaciones.js`): campos obligatorios, formato
  de correo electrónico y mensajes de error/éxito dinámicos.
- Imágenes de referencia en cada sección, con texto alternativo (`alt`).
- Listados de productos, servicios e información de contacto mediante `<ul>`.
- Secciones organizadas con etiquetas semánticas (`<section>`, `<article>`).
- Pie de página con enlaces de referencia externos.
- Diseño adaptado con CSS propio (`pets.css`), incluyendo imágenes autoadaptativas.

## Decisiones de configuración
- Se utilizó `<ul>` (lista desordenada) para los listados de productos, servicios
  e información de contacto.
- Cada sección principal fue implementada con la etiqueta semántica `<section>`.
- La validación del formulario se realiza en el cliente con JavaScript puro,
  sin recargar la página (`preventDefault`).

## Sitio publicado
https://isigomez.github.io/pets-sitio-web/inicio.html

## Tecnologías
- HTML5
- CSS3
- JavaScript