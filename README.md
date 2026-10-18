# 🐱 Gats del Món

Aplicació web desenvolupada amb **Vue 3** i **Firebase** per descobrir diferents races de gats i curiositats sobre elles.

La web permet navegar entre diferents seccions, consultar informació sobre diverses races felines i obtenir dades emmagatzemades en una base de dades Firestore.

---

# 🛠 Tecnologies utilitzades

- Vue 3
- Vue Router
- Firebase Hosting
- Firebase Firestore
- JavaScript
- HTML
- CSS

---

# 🚀 Instal·lació

Clona el repositori:

```bash
git clone https://github.com/cirernena-07/vue_gatsdelmon.git
```

Accedeix a la carpeta del projecte:

```bash
cd vue_gatsdelmon
```

Instal·la les dependències:

```bash
npm install
```

---

# ▶️ Execució local

Per executar l'aplicació en mode desenvolupament:

```bash
npm run dev
```

Després, obre al navegador la URL indicada per Vite (normalment):

```text
http://localhost:5173
```

---

# 📦 Generar la versió de producció

Per generar la carpeta de producció:

```bash
npm run build
```

Això crearà la carpeta:

```text
dist/
```

---

# 🌐 Desplegament a Firebase Hosting

Per publicar l'aplicació:

```bash
firebase deploy
```

---

# 🧩 Components propis

## NavBar.vue

Component encarregat de mostrar el menú de navegació principal de l'aplicació.

## GatList.vue

Component encarregat d'obtenir les dades dels gats des de Firestore i mostrar-les a la vista.

## GatCard.vue

Component encarregat de mostrar la informació d'un gat individual.

## CatIllustration.vue

Component auxiliar que mostra les il·lustracions personalitzades dels gats.

---

# 🔄 Comunicació amb props

L'aplicació utilitza comunicació entre components mitjançant **props**.

### Component pare

```text
GatList.vue
```

### Component fill

```text
GatCard.vue
```

### Props enviades

```text
nom
raca
```

### Exemple

Component pare:

```vue
<GatCard
  :nom="gat.nom"
  :raca="gat.raca"
/>
```

Component fill:

```js
defineProps({
  nom: String,
  raca: String
})
```

---

# 🛣 Rutes de l'aplicació

## /

**Home**

Pàgina principal amb una introducció al projecte i informació general sobre les races de gats.

---

## /gats

**Gats**

Mostra la llista de races de gats recuperades des de Firestore.

---

## /about

**Sobre nosaltres**

Informació sobre el projecte i els seus objectius.

---

# 🔥 Firestore

## Col·lecció utilitzada

```text
Gats
```

## Camps principals

```text
nom
raca
```

## Vista que mostra les dades

```text
GatsView.vue
```

Les dades es recuperen des de Firestore i es mostren mitjançant els components `GatList.vue` i `GatCard.vue`.

---

# 🌍 Web publicada

## GitHub

https://github.com/cirernena-07/vue_gatsdelmon

## Firebase Hosting

 https://gats-del-mon.web.app

---

# 👩‍💻 Autoria

Projecte desenvolupat per:

- Magdalena Cirer Castillo
- Júlia Martínez

Activitat de Web Dinàmica.
