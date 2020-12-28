<template>
  <footer class="w-full font-sans text-base text-white bg-indigo-800 dark:bg-navy-700">
    <hr class="sr-only">
    <div class="flex flex-col flex-wrap p-8 mx-auto text-white">
      <div class="w-max md:w-1/3">
        <div class="text-sm h-card vcard">
          <div class="">
            <span class="pr-2 text-blue-300">
              <svg role="presentation" width="1em" height="1em" class="inline w-6 h-6 mx-1" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"></path>
              </svg>
            </span>
            <span class="inline-flex flex-col text-sm w-max">
              <a class="flex-1 inline font-mono font-semibold font-white p-name fn org u-url" href="https://stonava.knihovna.cz">{{ $static.prismicio.footer.edges[0].node.org[0].fn }}</a>
              <p class="flex-1 italic text-blue-300 note">
                {{ $static.prismicio.footer.edges[0].node.org[0].note }}
              </p>
            </span>
          </div>
          <address class="py-1 not-italic p-adr adr" aria-label="Adresa knihovny">
            <span class="pr-2 text-blue-300">
              <svg role="presentation" width="1em" height="1em" class="inline w-6 h-6 mx-1" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"></path>
              </svg>
            </span>
            <span class="inline-flex flex-col w-max">
              <span class="flex-1 p-street-address street-address">Stonava č. p. 825</span>
              <span class="flex-1 block">
                <span>&nbsp;</span>
                <span class="pr-1 w-max p-postal-code postal-code" aria-label="Poštovní směrovací číslo">735 34</span>
                <span class="pr-1 w-max">
                  <span class="">&nbsp;</span>
                  <span class="uppercase p-locality locality" aria-label="Místo">Stonava</span>
                  <span class="">,&nbsp;</span>
                </span>
              </span>
              <span class="flex-1 p-country-name country-name">Česká republika</span>
            </span>
          </address>
          <div class="pb-2 footer-geo">
            <span class="pr-2 text-blue-300" aria-hidden="true">
              <svg role="presentation" width="1em" height="1em" class="inline w-6 h-6 mx-1" fill="currentColor" fill-rule="evenodd" viewBox="0 0 20 20" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </span>
            <span class="inline-flex flex-col w-max">
              <a
                href="https://mapy.cz/s/kabumehudo"
                aria-label="Otevřít mapu na mapy.cz"
                target="_blank"
                rel="nofollow">
                <span class="flex-1 p-geo geo">
                  <abbr class="block pr-2 font-mono text-blue-600 no-underline p-latitude latitude"
                    title="49.81706686002181">N 49° 49'01.4"</abbr>
                  <abbr class="block font-mono text-blue-600 no-underline p-longitude longitude"
                    title="18.52542109858042">E 18° 31'31.5"</abbr>
                </span>
              </a>
            </span>
          </div>
          <div class="pt-4">
            <!-- HeroIcon: Phone -->
            <abbr class="pr-2 text-indigo-300 type" title="home" aria-label="telefonní číslo">
              <svg
                role="presentation"
                width="1em" height="1em"
                class="inline w-6 h-6 mx-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </abbr>
            <div class="inline-flex flex-col w-max">
              <div class="flex-1 tel">
                <a
                  href="tel:00420596422051"
                  aria-label="596 . 422 . 0 51 ."
                  class="font-mono text-white"
                  >596 422 051</a>
              </div>
              <div class="flex-1 tel">
                <a
                  href="tel:00420558849525"
                  aria-label="558 . 849 . 525 ."
                  class="font-mono text-blue-300">558 849 525</a>
              </div>
            </div>
          </div>

          <div class="email">
            <span class="pr-2 text-blue-300">
              <svg role="presentation" width="1em" height="1em" class="inline w-6 h-6 mx-1" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"></path>
              </svg>
            </span>
            <span class="value"><a href="mailto:mkston@rkka.cz" class="font-mono text-white">mkston@rkka.cz</a></span>
          </div>
        </div>
        <div class="pt-4 text-sm footer-library-info">
          <div class="py-1">
            <span class="pr-2 text-blue-300">
              <svg role="presentation" width="1em" height="1em" class="inline w-6 h-6 mx-1" fill-rule="evenodd" fill="currentColor" viewBox="0 0 20 20" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"></path>
              </svg>
            </span>
            <div class="inline-flex flex-col w-max">
              <div class="flex-1 sigla">
                <span class="pr-2 text-blue-300">Sigla:</span>
                <span class="font-mono font-semibold select-all">KAG515</span>
              </div>
              <div class="flex-1 ec-mk-cr">
                <span class="pr-2 text-blue-300" aria-label="Evidenční číslo ministerstva kultury ČR">Evid. č. MK ČR:</span>
                <span class="font-mono font-semibold select-all">1953</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-2/3">
        <div v-for="edge in $static.info.edges" :key="edge.node.slug">
          <a :href="'/cs/' + edge.node.slug">
            {{ edge.node.title }}
          </a>
        </div>
      </div>
    </div>

    <div class="w-full py-4 mx-auto -mb-4 text-xs text-center bg-indigo-900 dark:bg-navy-800">
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/deed.cs" class="block py-1">
        <g-image
          alt="Licence Creative Commons"
          class="inline w-auto h-6"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
      </a>
      <p>
        <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Webové stránky</span>, jejiž autorem je
        <a xmlns:cc="http://creativecommons.org/ns#" href="https://knihovna.stonava.cz" property="cc:attributionName" rel="cc:attributionURL">{{ $static.prismicio.footer.edges[0].node.org[0].fn }}</a>, podléhají licenci
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.cs">Creative Commons Uveďte původ 4.0 Mezinárodní</a>.
      </p>
      <p>
        {{ $static.prismicio.footer.edges[0].node.org[0].fn }} &copy; 2020.
        Některá práva vyhrazena.
      </p>
    </div>
  </footer>
</template>

<style>
.geo abbr {
  @apply block text-teal-400 font-mono pr-2;
  @apply no-underline !important;
}
</style>

<static-query>
query {
  prismicio {
    footer: allFooters(lang: "pl") {
    	edges {
        node {
          org {
            fn
            note
          }
        }
      }
    }
  }
  info: allInfo {
    edges {
      node {
        title
        slug
      }
    }
  }
}
</static-query>

<script>
export default {
  mounted() {
    console.log(this.$static.info.edges)
  }
};
</script>