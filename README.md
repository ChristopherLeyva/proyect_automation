# 🚀 Proyecto de Automatización

**Práctica Evaluativa**  
_Christopher Lucas Leyva Chumpitaz_

![Typing SVG](https://readme-typing-svg.herokuapp.com?color=36BCF7&center=true&vCenter=true&width=600&lines=React+%2B+Tailwind+CSS+%2B+Python;Desarrollo+web+y+automatización;Proyecto+educativo+2025)

---

## 📌 Descripción

Proyecto académico que combina:
- **React**: para crear interfaces modernas y reactivas.
- **Tailwind CSS v4**: para diseñar estilos rápidos, responsivos y personalizables.
- **Python**: para la automatización, análisis y creación de APIs.

> Este proyecto busca demostrar conocimientos básicos de programación, organización y uso de tecnologías actuales en desarrollo web y automatización.

---

## ⚙️ Instalación paso a paso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/proyect_automation.git
cd proyect_automation
````

---

## 🌿 Frontend: React + Tailwind CSS

### Crear proyecto React (Vite)

```bash
cd frontend
npm create vite@latest
npm install
```

### Instalar Tailwind CSS v4

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Editar `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

Agregar en `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Ejecutar proyecto

```bash
npm run dev
```

---

## 🐍 Backend / Python: instalación y ejemplo

Instalar librerías recomendadas:

```bash
pip install pandas numpy requests matplotlib flask
```

Ejemplo básico con Flask:

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Servidor Python funcionando correctamente.'

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 📦 Ejemplos básicos de librerías Python

**Pandas**

```python
import pandas as pd
df = pd.read_csv('archivo.csv')
print(df.head())
```

**NumPy**

```python
import numpy as np
a = np.array([1, 2, 3])
print(a.mean())
```

**Requests**

```python
import requests
response = requests.get('https://api.example.com')
print(response.status_code)
```

**Matplotlib**

```python
import matplotlib.pyplot as plt
plt.plot([1,2,3],[4,5,6])
plt.title('Gráfico simple')
plt.show()
```

---

## ⚛️ React: hooks básicos

**useState**

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Contador: {count}</button>
```

**useEffect**

```jsx
useEffect(() => {
  console.log("Componente montado");
}, []);
```

**useContext**

```jsx
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);
<p>Tema actual: {theme}</p>
```

---

## 🛠️ Tecnologías empleadas

* React
* Tailwind CSS v4
* Python: Flask, Pandas, NumPy, Requests, Matplotlib

---

## ✒️ Autor

**Christopher Lucas Leyva Chumpitaz**
*Proyecto educativo realizado como parte de práctica evaluativa 2025.*

---

![Thanks](https://readme-typing-svg.herokuapp.com?color=00FFAD\&center=true\&vCenter=true\&width=600\&lines=Gracias+por+visitar+el+repositorio;⭐+Si+te+gustó,+puedes+dar+estrella)

```
```
