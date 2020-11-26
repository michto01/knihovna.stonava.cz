<template>
  <Layout>
    <article>
        <header>
            <h1 class="text-5xl font-bold text-gray-800 dark:text-white font-lg">Právní upozornění</h1>
            <p class="text-2xl text-gray-700">
                Na informace na těchto stránkách se vztahují prohlášení o vyloučení právní 
                odpovědnosti a upozornění o ochraně autorských práv.
            </p>
        </header>
        <section>
            <h2>Prohlášení o vyloučení právní odpovědnosti</h2>
            <p class="text-justify">
                Tyto internetové stránky spravuje Místní knihovna Stonava, aby zajistila veřejnosti přístup 
                k informacím o své působnosti a iniciativách obecně. Naším cílem je poskytovat přesné, 
                aktualizované informace. Budeme-li upozorněni na chyby, pokusíme se je opravit. Místní knihovna Stonava
                však vylučuje jakoukoli odpovědnost související s informacemi na těchto internetových stránkách.
            </p>

            <p>
                <strong>Tyto informace:</strong>
                <ul>
                    <li>jsou obecného charakteru a nezohledňují situaci konkrétních osob či subjektů</li>
                    <li>nejsou nutně ucelené, úplné, přesné nebo aktuální</li>
                    <li>v některých případech odkazují na informace externích subjektů, nad nimiž Místní knihovna Stonava nemá kontrolu a za něž nepřebírá odpovědnost</li>
                    <li>nelze považovat za odbornou či právní radu (potřebujete-li specifické poradenství, měli byste se vždy obracet na kvalifikovaného odborníka).</li>
                </ul>
                Upozorňujeme, že nelze zaručit, že dokument dostupný online přesně odpovídá oficiálně přijatému textu.
            </p>

            <p>
                Snažíme se vyvarovat poruch způsobených technickými chybami. 
                Některé údaje či informace na naší stránce však mohly být vytvořeny 
                nebo strukturovány do souborů nebo formátů, které nejsou bezchybné. 
                Proto nemůžeme zaručit, že naše služby nebudou v důsledku těchto problémů přerušeny 
                či jinak ovlivněny. Místní knihovna Stonava se vzdává veškeré odpovědnosti za problémy, 
                které nastanou v důsledku používání těchto internetových stránek či jakékoliv 
                jiné externí stránky, na niž se odkazuje.
            </p>

            <p >
                Záměrem tohoto prohlášení není omezit odpovědnost Evropské komise v případě porušení platných 
                právních předpisů ani vyloučit její odpovědnost v záležitostech, ve kterých ji podle těchto 
                předpisů vyloučit nelze.
            </p>
        </section>

        <section>
            <h2>Upozornění o ochraně autorských práv</h2>
            <p>© Místní knihovna Stonava, 1991–2020</p>

            <p>
                Pokud není uvedeno jinak (např. v jednotlivých upozorněních o autorských právech), 
                je obsah, který je ve vlastnictví Místní knihovny Stonava na této internetové stránce, 
                předmětem licence na základě mezinárodní licence <a href="#">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>.
            </p>

            <blockquote class="">
                To znamená, že další použití je povoleno za předpokladu, že je řádně uveden zdroj 
                a označeny jakékoli změny.
            </blockquote>
            
            <p class="text-justify">
                V případě, že konkrétní obsah zobrazuje identifikovatelné soukromé osoby nebo zahrnuje
                práce třetí strany, můžete být požádáni o získání dodatečných práv. Chcete-li použít 
                nebo reprodukovat obsah, který není ve vlastnictví Místní knihovny Stonava, je možné, 
                že budete muset požádat o povolení přímo držitele práv. 
            </p>

            <p class="text-justify">
                Software nebo dokumenty, na něž se vztahují práva průmyslového vlastnictví, jako jsou 
                patenty, ochranné známky, zapsané průmyslové vzory, loga a názvy, jsou v oblasti 
                dalšího použití vyloučeny a licence se na ně nevztahuje.
            </p>

            <h3>Vyjímky z license</h3>

        </section>
    </article>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<style scoped>
section {
    @apply pt-1 pb-3;
}

h1 {
    @apply text-5xl font-extrabold text-gray-800 dark:text-gray-100 mt-1 mb-3;
}
h2 {
    @apply text-3xl font-bold text-gray-800 dark:text-gray-100 mt-1 mb-3;
}
h3 {
    @apply text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1 mb-3;
}
p {
    @apply mt-2 mb-3;
}
blockquote {
    @apply pl-3 py-1 bg-green-100 border-l-4 border-green-600 text-green-900;
}

li {
    @apply list-disc list-inside py-1;
}

a {
    @apply underline text-blue-700;
}
a::after {
    @apply underline text-blue-700;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'%3E%3C/path%3E%3Cpath d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'%3E%3C/path%3E%3C/svg%3E")
}
article > header {
    @apply bg-green-100 p-4;
}
</style>

<script>
export default {
  metaInfo: {
    title: 'Právní upozornění'
  }
}
</script>


