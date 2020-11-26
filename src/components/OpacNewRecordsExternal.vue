<template>
<div>
    <form method="POST" action="https://opacnew.rkka.cz/?fn=searchform&extSrchNews=60">
        <!--input type="hidden" name="fs" value="5FA90E918F304B8AB2A970FE229156C6"-->
        <input type="hidden" name="fn" value="searchform">
        <input type="hidden" name="fo">
        <input type="hidden" name="fa" value="prepare4Search">
        <!--input type="hidden" name="fc" value="00000F81"-->
        <input type="hidden" name="cmblb_RKKA" value="S#">
        <!-- Advanced serach form data -->
        <input type="hidden" name="srchEdit1">
        <input type="hidden" name="condCombo1" value="3"><!-- Hledej novinky -->
        <input type="hidden" name="srchCombo1" value="600"><!-- Za poslednich X dni max 30 -->
        <input type="hidden" name="boolCombo1" value="OR">
        <input type="hidden" name="srchEdit2">
        <input type="hidden" name="typeCombo2" value="1">
        <input type="hidden" name="condCombo2" value="3">
        <input type="hidden" name="srchCombo2" value="60">
        <input type="hidden" name="boolCombo2" value="OR">
        <input type="hidden" name="srchEdit3">
        <input type="hidden" name="condCombo3" value="3">
        <input type="hidden" name="srchCombo3" value="30">
        <input type="hidden" name="editYearFrom">
        <input type="hidden" name="editYearTo">
        <span class="inset-y-0 right-0 flex items-center pr-1 bg-red-500">
            <button aria-label="Zobraz novinky ve fondu" type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg role="img" class="w-6 h-6 text-green-600 dark:text-gray-400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <label>Zobraz novinky ve fondu</label>
            </button>
        </span>
    </form>
  <button>
  </button>
</div>
</template>

<script>
export default {

}
</script>