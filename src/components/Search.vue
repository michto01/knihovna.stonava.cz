<template>
    <div>
        <form method="POST" class="py-3" action="https://opacnew.rkka.cz/?fn=searchform" target="_blank">
            <div>
                <!-- Fields for katalog.rkka.cz -->
                <input type="hidden" name="fn" value="searchform">
                <input type="hidden" name="fa" value="prepare4Search">
                <!--input type="hidden" name="fc" value="00000FE0"-->
                <input type="hidden" name="fc" value="00000468">
                <input type="hidden" name="fo" ><!--value="prepare4Search"-->
                <input type="hidden" name="fs" value="5FA90E918F304B8AB2A970FE229156C6">
                <!--input type="hidden" name="dwcall" value="ajax"-->
                <!--input type="hidden" name="aa" value="dwstick"-->
                <input type="hidden" name="cmblb_RKKA" value="S#">
                <input type="hidden" name="googlecombo" value="allwords">
                
            </div>
            
            <div class="relative text-gray-600 rounded focus-within:text-gray-400 focus-within:bg-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center px-1 bg-gray-200 rounded-l">
                    <select name="datasource" id="search-datasouce" class="bg-transparent rounded-l ring-offset-transparent focus:ring-offset-transparent focus:outline-none">
                        <option value="c">{{catalogue}}</option>
                        <option value="w">{{website}}</option>
                    </select>
                </span>
                <input 
                    type="search" 
                    name="googleedit" 
                    class="w-full py-2 pl-24 pr-8 text-white placeholder-green-500 placeholder-opacity-50 bg-green-900 rounded sm:text-sm dark:placeholder-gray-400 focus:placeholder-green-800 dark:bg-gray-600 focus:outline-none dark:focus:bg-white focus:bg-white focus:text-gray-900" 
                    :placeholder="placeholder" 
                    autocomplete="off"
                >
                <span class="absolute inset-y-0 right-0 flex items-center pr-1">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline" tabindex="-1">
                    <svg  class="w-6 h-6 text-green-600 dark:text-gray-400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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