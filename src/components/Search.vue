<template>
    <div>
        <form role="search" method="POST" action="https://opacnew.rkka.cz/?fn=searchform" target="_blank">
            <label class="sr-only" for="search-input">Vyhledat v knihovně</label>
            <!-- Fields for katalog.rkka.cz -->
            <input type="hidden" name="fo">
            <input type="hidden" name="fc" value="00000468">
            <input type="hidden" name="fn" value="searchform">
            <input type="hidden" name="fa" value="prepare4Search">
            <input type="hidden" name="fs" value="5FA90E918F304B8AB2A970FE229156C6">
            <input type="hidden" name="cmblb_RKKA" value="S#">
            <input type="hidden" name="googlecombo" value="allwords">
            
            <div class="relative text-indigo-800 rounded-md bg-indigo-50 focus-within:text-navy-900 focus-within:bg-indigo-700">
                <span class="absolute inset-y-0 flex items-center p-1 py-0 bg-indigo-100 rounded-l-md text-navy-900 focus-within:ring-4">
                    <select name="datasource" id="search-datasouce" class="bg-transparent ring-offset-transparent focus:outline-none focus:ring-2 focus:text-coal-800">
                        <option value="c">{{catalogue}}</option>
                        <option value="w">{{website}}</option>
                    </select>
                </span>
                <input 
                    type="search" 
                    id="search-input"
                    name="googleedit" 
                    class="w-full py-2 pl-24 pr-8 text-black placeholder-indigo-700 placeholder-opacity-50 rounded-md bg-indigo-50 sm:text-sm dark:placeholder-gray-400 focus:placeholder-indigo-900 dark:bg-gray-600 dark:focus:bg-white focus:bg-indigo-50 focus:ring-4 focus:outline-none focus:text-indigo-600 hover:ring-indigo-500 hover:ring-4 hover:ring-opacity-75 hover:ring-offest-2" 
                    :placeholder="placeholder" 
                    autocomplete="off"><!--autofocus-->
                <span class="absolute inset-y-0 flex items-center pr-1 right-1">
                    <button aria-label="Hledat" type="submit" class="rounded-md focus:outline-none focus:ring-2">
                        <svg role="img" width="1em" height="1em" class="w-5 h-5 focus:text-indigo-900 dark:text-gray-400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <label class="sr-only">&nbsp;Hledat</label>
                    </button>
                </span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        placeholder : {
            type: String,
            default: 'Začít hledat ...'
        },
        catalogue : {
            type: String,
            default: 'katalog'
        },
        website: {
            type: String,
            default:  'web'
        }
    }
}
</script>