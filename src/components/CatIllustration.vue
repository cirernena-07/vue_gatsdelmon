<script setup>
defineProps({
  breed: { type: String, default: 'tabby' },
  label: { type: String, default: 'un gat' },
  fur: { type: String, default: '#D8B89B' },
  inner: { type: String, default: '#C88780' },
  eyes: { type: String, default: '#526174' },
})
</script>

<template>
  <svg
    class="cat-illustration"
    viewBox="0 0 220 230"
    role="img"
    :aria-label="`Il·lustració de ${label}`"
    :style="{ '--fur': fur, '--inner': inner, '--eyes': eyes }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="110" cy="210" rx="55" ry="8" fill="#3D405B" opacity=".07" />
    <path
      d="M148 186c28 4 39-9 36-27-2-11-10-16-17-11-5 4 0 10 4 8"
      fill="none"
      stroke="var(--fur)"
      stroke-linecap="round"
      stroke-width="16"
    />
    <path d="M73 137c-2 19-7 33-9 48 13 9 77 9 92 0-3-18-8-32-9-48Z" fill="var(--fur)" />
    <path d="M79 178v10m62-10v10" stroke="var(--inner)" stroke-linecap="round" stroke-width="5" opacity=".7" />
    <path
      v-if="breed === 'maine' || breed === 'persian' || breed === 'ragdoll' || breed === 'angora'"
      d="M71 139c-13 16-17 31-9 43 7 8 17 3 23-7l-1 15c15 9 47 9 62 0l-2-15c7 11 18 13 25 5 8-11 3-28-9-42l-13-10H82Z"
      fill="var(--fur)"
    />
    <path
      v-if="breed === 'maine'"
      d="m73 63-5-24q-1-8 6-3l23 19m49 8 5-24q1-8-6-3l-23 19"
      fill="var(--inner)"
      stroke="var(--fur)"
      stroke-linejoin="round"
      stroke-width="7"
    />
    <path
      v-else-if="breed === 'scottish'"
      d="m73 67-2-17q-1-6 5-3l20 14m49 6 2-17q1-6-5-3l-20 14"
      fill="var(--inner)"
      stroke="var(--fur)"
      stroke-linejoin="round"
      stroke-width="8"
    />
    <path
      v-else
      d="m71 75 4-38q1-8 8-2l27 25 27-25q7-6 8 2l4 38"
      fill="var(--fur)"
      stroke="var(--fur)"
      stroke-linejoin="round"
      stroke-width="5"
    />
    <path
      v-if="breed === 'siamese' || breed === 'ragdoll'"
      d="m76 69 5-25 19 20zm68 0-5-25-19 20z"
      fill="#75675F"
    />
    <path
      v-if="breed !== 'scottish'"
      d="m82 48 18 17-22 3zm56 0-18 17 22 3z"
      fill="var(--inner)"
      opacity=".82"
    />
    <path
      v-if="breed === 'persian' || breed === 'maine' || breed === 'ragdoll' || breed === 'angora'"
      d="M59 101c0-37 21-59 51-59s51 22 51 59c0 35-22 58-51 58s-51-23-51-58Z"
      fill="var(--fur)"
      stroke="var(--fur)"
      stroke-linecap="round"
      stroke-width="12"
    />
    <path
      v-else
      d="M64 101c0-35 18-57 46-57s46 22 46 57-19 55-46 55-46-20-46-55Z"
      fill="var(--fur)"
    />
    <g v-if="breed === 'maine'">
      <path d="m75 61 8-20 12 18m50 2-8-20-12 18" fill="none" stroke="var(--inner)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
      <path d="M67 132q-8 14 2 27m14-17q-4 18 8 31m51-31q4 18-8 31m22-41q8 14-2 27" fill="none" stroke="var(--inner)" stroke-linecap="round" stroke-width="4" opacity=".55" />
    </g>
    <g v-if="breed === 'persian'">
      <path d="M67 88q-10 9-6 24m108-24q10 9 6 24M85 132q11-9 20-2m10 0q9-7 20 2" fill="none" stroke="var(--inner)" stroke-linecap="round" stroke-width="3" opacity=".4" />
      <ellipse cx="110" cy="119" rx="14" ry="9" fill="var(--fur)" />
    </g>
    <g v-if="breed === 'british'">
      <ellipse cx="75" cy="119" rx="16" ry="14" fill="var(--fur)" />
      <ellipse cx="145" cy="119" rx="16" ry="14" fill="var(--fur)" />
      <path d="M78 140q8 6 15 2m34 0q7 4 15-2" fill="none" stroke="var(--inner)" stroke-linecap="round" stroke-width="3" opacity=".45" />
    </g>
    <g v-if="breed === 'scottish'">
      <path d="M73 62q8 14 22 13m52-13q-8 14-22 13" fill="none" stroke="var(--inner)" stroke-linecap="round" stroke-width="5" />
    </g>
    <path
      v-if="breed === 'siamese' || breed === 'ragdoll'"
      d="M73 65 82 78l-8 16q-4 19 8 30l28 10 28-10q12-11 8-30l-8-16 9-13-20 1-17 15-17-15Z"
      fill="#75675F"
      opacity=".92"
    />
    <path
      v-if="breed === 'siamese' || breed === 'ragdoll'"
      d="M99 120q11 8 22 0l8 12q-18 17-36 0Z"
      fill="#D6B9A5"
    />
    <g v-if="breed === 'bengal'">
      <ellipse cx="76" cy="157" rx="7" ry="5" fill="#83522F" transform="rotate(-25 76 157)" />
      <ellipse cx="92" cy="165" rx="8" ry="5" fill="#83522F" transform="rotate(18 92 165)" />
      <ellipse cx="111" cy="160" rx="7" ry="5" fill="#83522F" transform="rotate(-15 111 160)" />
      <ellipse cx="130" cy="165" rx="8" ry="5" fill="#83522F" transform="rotate(22 130 165)" />
      <ellipse cx="147" cy="155" rx="6" ry="5" fill="#83522F" transform="rotate(-15 147 155)" />
      <ellipse cx="84" cy="178" rx="5" ry="4" fill="#83522F" />
      <ellipse cx="120" cy="181" rx="5" ry="4" fill="#83522F" />
      <path d="m81 87 6-5m-4 12 7-5m43-2-7-5m5 13-8-5" fill="none" stroke="#87532F" stroke-linecap="round" stroke-width="4" />
      <path d="m93 64 5 7-6 6-6-5zm31 1-5 7 6 6 6-5z" fill="#87532F" />
      <ellipse cx="80" cy="105" rx="6" ry="4" fill="#87532F" transform="rotate(-25 80 105)" />
      <ellipse cx="140" cy="105" rx="6" ry="4" fill="#87532F" transform="rotate(25 140 105)" />
      <ellipse cx="88" cy="120" rx="5" ry="3.5" fill="#87532F" transform="rotate(18 88 120)" />
      <ellipse cx="132" cy="120" rx="5" ry="3.5" fill="#87532F" transform="rotate(-18 132 120)" />
    </g>
    <g v-if="breed === 'siamese' || breed === 'ragdoll'">
      <path d="M69 169q10 3 18 1v13q-9 5-19 0zm64 1q8 2 18-1l1 14q-10 5-19 0z" fill="#75675F" />
    </g>
    <g v-if="breed === 'tabby'">
      <path d="m99 55-5 15m15-16-1 17m12-16 5 15M67 89l13 5m-14 8 13 1m-10 9 13-3m61-20-13 5m14 7-13 1m10 9-13-3" fill="none" stroke="#9C7153" stroke-linecap="round" stroke-width="4" opacity=".8" />
      <path d="m83 164-2 11m17-10-1 12m26-12 2 12m15-13 3 11" fill="none" stroke="#9C7153" stroke-linecap="round" stroke-width="5" opacity=".7" />
    </g>
    <g v-if="breed === 'british'">
      <ellipse cx="110" cy="109" rx="47" ry="48" fill="none" stroke="#71827F" stroke-width="3" opacity=".18" />
      <ellipse cx="80" cy="126" rx="12" ry="8" fill="#fff" opacity=".18" />
      <ellipse cx="140" cy="126" rx="12" ry="8" fill="#fff" opacity=".18" />
    </g>
    <g v-if="breed === 'sphynx'" fill="none" stroke="#B87F77" stroke-linecap="round" opacity=".6">
      <path d="M74 82q8 7 16 0m40 0q8 7 16 0" stroke-width="2" />
      <path d="M72 99q7 6 15 0m46 0q8 6 15 0" stroke-width="2" />
      <path d="M85 150q25 9 50 0" stroke-width="2" />
    </g>
    <ellipse cx="91" cy="103" rx="8" ry="11" fill="var(--eyes)" />
    <ellipse cx="129" cy="103" rx="8" ry="11" fill="var(--eyes)" />
    <ellipse cx="93" cy="99" rx="2.4" ry="3.2" fill="#fff" />
    <ellipse cx="131" cy="99" rx="2.4" ry="3.2" fill="#fff" />
    <ellipse cx="75" cy="125" rx="9" ry="5" fill="#F28482" opacity=".34" />
    <ellipse cx="145" cy="125" rx="9" ry="5" fill="#F28482" opacity=".34" />
    <path d="m106 122 4-3 4 3-4 4z" fill="#C98283" />
    <path d="M110 126c0 6-7 8-11 4m11-4c0 6 7 8 11 4" fill="none" stroke="#3D405B" stroke-linecap="round" stroke-width="2.5" />
    <path d="m84 126-21-3m21 9-22 3m84-9 21-3m-21 9 22 3" fill="none" stroke="#3D405B" stroke-linecap="round" stroke-width="1.8" opacity=".58" />
  </svg>
</template>
