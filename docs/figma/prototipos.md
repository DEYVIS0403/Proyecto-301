# Prototipos del Proyecto Tienda Online Móvil



## Información del Documento



**Última actualización:** [15/10/2025] 

**Versión del prototipo:** [v1.0] 

**Herramienta:** Figma 



---



## Propósito del Prototipo



Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto de la tienda online móvil. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.



**Objetivos del prototipo:**

- Validar la **experiencia de usuario** antes de desarrollar

- Alinear la **visión del producto** entre todos los miembros del equipo

- Servir como **referencia visual** durante el desarrollo backend y frontend

- Documentar las **decisiones de diseño** tomadas en cada sprint



---



## Enlaces Principales



### Proyecto Principal

**URL:** [https://www.figma.com/design/n954V6mJDTTvFjYWYcQrfk/TIENDA-ONLINE?node-id=11-2&t=jQ71itdy9wFzH2lo-1]



---



## Estructura del Prototipo



### Sistema de Diseño



**Paleta de colores:**

- **Color primario:** #DCBC77 - Acciones principales, botones , elementos

- **Color secundario:** #AD7E18 - Elementos complementarios, fondos sutiles.

- **Color de texto:** #70675B - Texto principal, íconos.

- **Colores de estado:**

 - Éxito: (No visible, sugerido: Verde)

 - Error: #595959

 - Advertencia: #B8B4A8



**Tipografía:**

- **Principal:** [Arial] - Textos y contenido

- **Títulos:** [FigmaHand] - Encabezados





**Espaciado:**

- Sistema de **8px grid**

- Espaciado base: 8px, 16px, 24px, 32px



---



## Pantallas incluidas:**

Se ha prototipado el Flujo Principal de Compra, cubriendo desde el inicio hasta el pago.



### Flujo Principal

1. **Pantalla de Bienvenida / Inicio**

  

2. **Formulario de Registro / Login**

  

3. **Catálogo**

  

4. **Detalles del Producto / Variantes**



4. **Perfil de Usuario**



4. **Carrito de Compras**



4. **Checkout: Caja / Método de PagoLogin**

  

4. **Formularios de Pago**









**Interacciones prototipadas:**

- Navegación del catálogo al detalle del producto.

- Adición al carrito y visualización.

- Flujo completo de Checkout con selección de pago.

- Navegación entre las pestañas principales (Catálogo, categorias, Perfil).





## 🧩 Componentes Reutilizables





**Componentes diseñados:**



#### Botones

- **Primario:** Acciones principales (guardar, enviar)

- **Secundario:** Acciones secundarias (cancelar, volver)

- **Terciario:** Acciones terciarias (enlaces, texto)

- **Estados:** Default, hover, active, disabled, loading



#### Formularios

- **Input text:** Entrada de texto estándar

- **Input password:** Con toggle de visibilidad



#### Navegación

- **Navbar:** Barra superior de navegación

- **Íconos de E-commerce:** Carrito, Búsqueda, Usuario, Corazón, Flechas de navegación.



#### Feedback

- **Toast notifications:** Mensajes temporales

- **Modals:** Ventanas emergentes

- **Alerts:** Avisos en contexto

- **Loading spinners:** Indicadores de carga

- **Progress bars:** Barras de progreso



#### Visualización de datos

- **Cards:** Tarjetas de información



---



### Responsive Design



**Breakpoints definidos:**

- **Mobile:** 440px - 1129px

- **Desktop:** 1440px+



### Accesibilidad



**Criterios implementados:**

- Contraste de colores según WCAG 2.1 AA

- Textos alternativos para imágenes

- Navegación por teclado

- Estados de foco visibles

- Jerarquía semántica de encabezados







## 📋 Checklist de Implementación



### Para el Equipo de Desarrollo



**Antes de comenzar un sprint:**

- [ ] Revisar el prototipo de Figma correspondiente al sprint

- [ ] Identificar todos los componentes necesarios

- [ ] Validar los endpoints de backend requeridos

- [ ] Confirmar las historias de usuario vinculadas



**Durante el desarrollo:**

- [ ] Consultar especificaciones de diseño (colores, tipografía, espaciado)

- [ ] Implementar estados de los componentes (hover, active, disabled)

- [ ] Validar responsive design en todos los breakpoints

- [ ] Solicitar feedback del diseñador si hay dudas



**Al finalizar:**

- [ ] Comparar implementación con el prototipo

- [ ] Actualizar este documento con notas de implementación

- [ ] Marcar las pantallas como completadas



---



## 🎨 Assets y Recursos



### Imágenes y Gráficos



**Ubicación:** `src/frontend/assets/images/`



**Assets exportados de Figma:**

- Logotipo (SVG, PNG)

- Iconos personalizados (SVG)

- Imágenes de placeholder (PNG, WebP)

- Ilustraciones (SVG)



**Convención de nombres:**

```

[tipo]-[descripcion]-[tamaño].[extension]



Ejemplos:

icon-user-24px.svg

logo-primary-full.svg

img-hero-1920x1080.webp

illus-empty-state.svg

```





### Preguntas Frecuentes



**P: ¿Dónde encuentro las medidas exactas de espaciado?**  

R: En Figma, selecciona cualquier elemento y revisa el panel de propiedades. Todos los espaciados siguen el sistema de 8px grid.



**P: ¿Puedo modificar un componente para un caso específico?**  

R: Consulta primero con el equipo. Si es un caso único, crea una variante. Si es recurrente, actualiza el componente base en Figma.



**P: ¿Cómo exporto assets de Figma?**  

R: Selecciona el elemento → Export → Configura formato y resolución → Export [nombre].



---



## Contacto y Soporte



**Responsable de diseño:** [deyvis] 

**Canal de comunicación:** [Slack, Discord, etc.] 

**Horario de disponibilidad:** [Especificar]



**Para dudas sobre el prototipo:**

1. Revisar este documento primero

2. Consultar directamente en Figma (comentarios)

3. Preguntar en el canal del equipo

4. Agendar sesión de revisión de diseño



---



## 🔗 Referencias Útiles



**Documentación relacionada:**

- `README.md` - Información general del proyecto

- `docs/sprint-planning/` - Planificación de sprints

- `CONTRIBUTING.md` - Guía de contribución

- `docs/retrospectivas/` - Aprendizajes de los sprints



**Recursos externos:**

- [Guía de Figma](https://help.figma.com)

- [Material Design Guidelines](https://m3.material.io)

- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)



---



**Última actualización:** [15-10-2025] 

**Mantenido por:** [deyvis] 

**Versión del documento:** 1.0

Message
Type Message
