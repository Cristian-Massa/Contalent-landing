# 🚀 Landing Page - ConTalent 🎉

Este repositorio contiene una landing page lista para usar, personalizar y desplegar.  
Está construida con **Next.js 14**, **TailwindCSS** y **pnpm** como gestor de paquetes.

---

## ⚡ Cómo desplegar

### 🔹 Opción 1: Fork en GitHub (recomendado)

1. Haz clic en **Fork** en este repositorio.
2. Conecta tu fork a un servicio de hosting como [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).
3. ✅ El deploy se realizará automáticamente cada vez que hagas **push** a tu fork.

### 🔹 Opción 2: `git clone` y subida manual

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/landing-conTalent.git
   cd landing-conTalent
   Súbelo luego a la plataforma de tu preferencia (Vercel, Netlify, Render, etc.).
   ```

💻 Entorno de desarrollo
🔧 Instalación inicial (solo la primera vez):

bash
Copy code
pnpm install
▶️ Levantar servidor de desarrollo:

bash
Copy code
pnpm dev
📦 Generar build de producción:

bash
Copy code
pnpm build
📝 Personalización
La landing incluye información de ejemplo (template) que puede modificarse libremente:

✏️ Textos

🎨 Colores y estilos

📄 Secciones de la página

🖼️ Recursos gráficos

📩 Formulario de contacto
El formulario de contacto está listo a nivel de frontend, pero requiere un backend para funcionar.

🔹 Opción 1: Endpoint en Next.js
Agrega un archivo dentro de /app/api/ para procesar el formulario y mandar correos.

Ejemplo básico:

```
// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
const data = await req.json();

// Procesa y envía el email con tu servicio preferido
console.log("Nuevo mensaje:", data);

return NextResponse.json({ success: true });
}
```

🔹 Opción 2: Server Actions
Se puede implementar con Server Actions para manejar el envío directamente desde el formulario.

👉 Si desean que yo me encargue de armar el procesador de emails, existe esa posibilidad también.

✅ Listo para usar
Con este setup, la landing puede estar online rápidamente y adaptarse a las necesidades de ConTalent.

✨ ¡Forkea, personaliza y despliega! ✨
