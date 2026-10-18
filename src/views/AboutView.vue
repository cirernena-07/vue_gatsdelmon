<script setup>
import CatIllustration from '../components/CatIllustration.vue'

const valors = [
  { icon: '♡', nom: 'Amor pels animals', text: 'El benestar dels gats sempre és el primer.' },
  { icon: '✿', nom: 'Educació', text: 'Compartim coneixement d’una manera propera i clara.' },
  { icon: '✳', nom: 'Curiositat', text: 'Ens encanta aprendre alguna cosa nova cada dia.' },
  { icon: '⌂', nom: 'Respecte pels gats', text: 'Cada gat és únic i mereix ser comprès.' },
]
</script>

<template>
  <main class="about-page">
    <section class="about-hero section-shell">
      <div class="about-copy" v-reveal>
        <span class="eyebrow"><span class="eyebrow-dot"></span> AMANTS DELS GATS, COM TU</span>
        <h1>Una història amb<br /><span>molts bigotis.</span></h1>
        <p>
          Gats del Món va néixer d’una idea senzilla: compartir la fascinació pels gats i tot allò
          que fa única cada raça.
        </p>
        <p class="about-aside">Un projecte fet amb estima, curiositat i potes inquietes.</p>
      </div>
      <div class="about-art" aria-label="Il·lustració original de tres gats de races diferents" v-reveal>
        <div class="about-art-circle"></div>
        <span class="about-toy toy-one" aria-hidden="true">✳</span>
        <span class="about-toy toy-two" aria-hidden="true">✦</span>
        <div class="about-cat about-cat-one">
          <CatIllustration breed="maine" label="un gat Maine Coon" fur="#9D7157" inner="#634B3D" />
        </div>
        <div class="about-cat about-cat-two">
          <CatIllustration breed="siamese" label="un gat siamès" fur="#EAD7BF" inner="#554B4A" eyes="#5AA7D9" />
        </div>
        <div class="about-cat about-cat-three">
          <CatIllustration breed="bengal" label="un gat bengalí" fur="#D9A36F" inner="#A86F45" />
        </div>
      </div>
    </section>

    <section class="about-story section-shell">
      <article class="story-card story-card-history" v-reveal>
        <span class="section-kicker">LA NOSTRA HISTÒRIA</span>
        <h2>Tot comença amb una <span>pregunta curiosa.</span></h2>
        <p>
          Per què cada gat és tan diferent? Vam començar a buscar respostes i vam trobar un món ple
          d’orígens, temperaments i petites dades fascinants. Aquesta web és la nostra manera de
          compartir-ho.
        </p>
      </article>
      <article class="story-card story-card-mission" v-reveal>
        <span class="section-kicker">LA NOSTRA MISSIÓ</span>
        <h2>Conèixer-los millor és <span>estimar-los millor.</span></h2>
        <p>
          Volem apropar les races felines a tothom amb informació clara, il·lustracions pròpies i
          curiositats que convidin a continuar descobrint.
        </p>
      </article>
    </section>

    <section class="values-section">
      <div class="section-shell">
        <div class="section-heading" v-reveal>
          <span class="section-kicker">ALLÒ QUE ENS MOU</span>
          <h2>Quatre valors, <span>molt de cor</span></h2>
          <p>Les idees que hi ha darrere de cada història que compartim.</p>
        </div>
        <div class="values-grid">
          <article v-for="(valor, index) in valors" :key="valor.nom" class="value-card" v-reveal>
            <div class="value-topline"><span>0{{ index + 1 }}</span><span aria-hidden="true">{{ valor.icon }}</span></div>
            <h3>{{ valor.nom }}</h3>
            <p>{{ valor.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
