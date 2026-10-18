<script setup>
import CatIllustration from '../components/CatIllustration.vue'

const destacats = [
  {
    nom: 'Siamès',
    breed: 'siamese',
    info: 'Sociable i molt comunicatiu',
    fur: '#EAD7BF',
    inner: '#554B4A',
    eyes: '#5AA7D9',
  },
  {
    nom: 'Bengalí',
    breed: 'bengal',
    info: 'Un petit explorador',
    fur: '#D9A36F',
    inner: '#A86F45',
  },
  {
    nom: 'Persa',
    breed: 'persian',
    info: 'Calma en versió felina',
    fur: '#F2E8D8',
    inner: '#D6BFA4',
  },
]

const curiositats = [
  {
    numero: '01',
    titol: 'Un ronc que reconforta',
    text: 'Els gats també ronronegen quan estan tranquils i a gust amb les persones que estimen.',
    tone: 'fact-sage',
  },
  {
    numero: '02',
    titol: 'Bigotis amb superpoders',
    text: 'Els bigotis els ajuden a percebre l’espai que els envolta i a orientar-se.',
    tone: 'fact-coral',
  },
  {
    numero: '03',
    titol: 'Una oïda molt fina',
    text: 'Poden moure cada orella de manera independent per localitzar millor els sons.',
    tone: 'fact-gold',
  },
]
</script>

<template>
  <main class="home-page">
    <section class="hero section-shell">
      <div class="hero-copy" v-reveal>
        <span class="eyebrow"><span class="eyebrow-dot"></span> UNA ENCICLOPÈDIA FELINA</span>
        <h1>Gats del <span>Món</span></h1>
        <p class="hero-lead">Descobreix les races de gats més fascinants del planeta.</p>
        <RouterLink class="button button-primary" to="/gats">
          Explora les races <span aria-hidden="true">↗</span>
        </RouterLink>
      </div>
      <div class="hero-art" aria-label="Il·lustració de tres gats de races diferents" v-reveal>
        <div class="hero-orbit orbit-one"></div>
        <div class="hero-orbit orbit-two"></div>
        <span class="hero-spark spark-one" aria-hidden="true">✳</span>
        <span class="hero-spark spark-two" aria-hidden="true">✦</span>
        <div class="hero-cat hero-cat-back">
          <CatIllustration breed="siamese" label="un gat siamès" fur="#EAD7BF" inner="#554B4A" eyes="#5AA7D9" />
        </div>
        <div class="hero-cat hero-cat-front">
          <CatIllustration breed="tabby" label="un gat tigrat" fur="#C69A73" inner="#966D4E" />
        </div>
        <div class="hero-cat hero-cat-side">
          <CatIllustration breed="british" label="un gat British Shorthair" fur="#849A98" inner="#607874" />
        </div>
        <div class="hero-caption"><span class="caption-dot"></span> un món ple de bigotis</div>
      </div>
      <a class="scroll-cue" href="#introduccio" aria-label="Desplaça't per descobrir-ne més">
        <span>Desplaça’t per descobrir</span>
        <span class="scroll-arrow" aria-hidden="true">↓</span>
      </a>
    </section>

    <section id="introduccio" class="intro-section">
      <div class="section-shell intro-inner" v-reveal>
        <span class="section-kicker">BENVINGUT AL NOSTRE RACÓ</span>
        <h2>Una casa per als <span>amants dels gats</span></h2>
        <p>
          Gats del Món és una enciclopèdia propera i visual per conèixer races, descobrir-ne les
          personalitats i compartir petites curiositats de l’univers felí.
        </p>
        <div class="intro-rule"><span></span><span class="rule-paw">✳</span><span></span></div>
      </div>
    </section>

    <section class="special-section">
      <div class="section-shell">
        <div class="section-heading" v-reveal>
          <span class="section-kicker">PETITS GRANS MISTERIS</span>
          <h2>Per què els gats són <span>tan especials?</span></h2>
          <p>Independents, sensibles i plens de sorpreses: sempre hi ha alguna cosa nova per aprendre.</p>
        </div>
        <div class="special-grid">
          <article class="special-card" v-reveal>
            <span class="special-icon icon-whiskers" aria-hidden="true">⌁</span>
            <span class="special-index">01 / ELS SEUS SENTITS</span>
            <h3>Veuen el món a la seva manera</h3>
            <p>Els sentits afinats els ajuden a explorar cada racó amb l’atenció de petits detectius.</p>
          </article>
          <article class="special-card" v-reveal>
            <span class="special-icon icon-purr" aria-hidden="true">≈</span>
            <span class="special-index">02 / EL SEU LLENGUATGE</span>
            <h3>Sempre tenen alguna cosa a dir</h3>
            <p>Amb roncs, mirades i miols suaus, cada gat troba la seva manera de comunicar-se.</p>
          </article>
          <article class="special-card" v-reveal>
            <span class="special-icon icon-heart" aria-hidden="true">♡</span>
            <span class="special-index">03 / LA SEVA PERSONALITAT</span>
            <h3>No hi ha dos gats iguals</h3>
            <p>N’hi ha d’aventurers i d’experts en migdiades. Cada personalitat és irrepetible.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="section-shell">
        <div class="section-heading featured-heading" v-reveal>
          <span class="section-kicker">UN PRIMER MÈU</span>
          <h2>Races per <span>enamorar-se’n</span></h2>
          <p>Et presentem tres personalitats ben diferents. Quina t’agradaria conèixer?</p>
        </div>
        <div class="featured-grid">
          <RouterLink
            v-for="(gat, index) in destacats"
            :key="gat.breed"
            class="featured-card"
            :class="`featured-card-${index + 1}`"
            to="/gats"
            v-reveal
          >
            <span class="featured-card-number">0{{ index + 1 }}</span>
            <CatIllustration
              :breed="gat.breed"
              :label="`un gat ${gat.nom}`"
              :fur="gat.fur"
              :inner="gat.inner"
              :eyes="gat.eyes"
            />
            <span class="featured-name">{{ gat.nom }}</span>
            <span class="featured-info">{{ gat.info }}</span>
            <span class="featured-arrow" aria-hidden="true">↗</span>
          </RouterLink>
        </div>
        <RouterLink class="text-link featured-link" to="/gats">
          Veure totes les races <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

    <section class="curiosities-section">
      <div class="section-shell">
        <div class="section-heading" v-reveal>
          <span class="section-kicker">HO SABIES?</span>
          <h2>Petites curiositats, <span>grans somriures</span></h2>
          <p>Algunes dades felines per gaudir i compartir.</p>
        </div>
        <div class="curiosity-grid">
          <article
            v-for="fact in curiositats"
            :key="fact.numero"
            class="curiosity-card"
            :class="fact.tone"
            v-reveal
          >
            <span class="curiosity-number">{{ fact.numero }}</span>
            <span class="curiosity-star" aria-hidden="true">✳</span>
            <h3>{{ fact.titol }}</h3>
            <p>{{ fact.text }}</p>
            <span class="curiosity-foot">CURIOSITAT FELINA <span aria-hidden="true">·</span> 1 MIN</span>
          </article>
        </div>
      </div>
    </section>

    <section class="home-cta section-shell" v-reveal>
      <div class="cta-decoration" aria-hidden="true">✳</div>
      <span class="section-kicker">CONTINUA EXPLORANT</span>
      <h2>La teva pròxima raça preferida<br />t’espera per descobrir-la.</h2>
      <p>Vine a conèixer totes les històries que caben en un parell de bigotis.</p>
      <RouterLink class="button button-light" to="/gats">Descobreix totes les races <span aria-hidden="true">→</span></RouterLink>
    </section>
  </main>
</template>
