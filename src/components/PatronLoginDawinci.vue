<template>
    <div class="w-full px-6 pt-2 pb-4 bg-red-500 rounded-md">
      <form class="flex flex-col items-end w-full mx-auto space-y-2" method="POST" action="https://opacnew.rkka.cz/?fn=*login_userPswd&btnResName=ERR">
        <input type="hidden" name="cmblbLocation" value="S#_LOC">
        <input type="hidden" name="fo">
        <input type="hidden" name='fc' value="00000040">
        <input type="hidden" name="fa" value="loginProcess">
        <input type="hidden" name="fn" value="login_userPswd">
        <div class="flex flex-col w-full">
          <label for="library-card-id" class="mb-1 text-xs tracking-wide text-red-900 sm:text-sm">Číslo čtenářského průkazu:</label>
          <div class="relative">
            <div class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-red-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <input id="library-card-id" type="text" name="editID" 
                class="w-full py-2 pl-10 pr-4 text-sm text-red-100 placeholder-red-500 placeholder-opacity-50 bg-red-900 border-yellow-800 rounded focus:text-red-700 focus:border-2 focus:bg-red-100 sm:text-base focus:outline-none focus:border-yellow-400" placeholder="Číslo průkazu (např. 1234)" />
          </div>
        </div>
         <div class="flex flex-col w-full">
          <label for="library-card-password" class="mb-1 text-xs tracking-wide text-red-900 sm:text-sm">Heslo:</label>
          <div class="relative">
            <div class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-red-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input id="library-card-password" type="password" name="editPassword" 
                class="w-full py-2 pl-10 pr-4 text-sm text-red-100 placeholder-red-500 placeholder-opacity-50 bg-red-900 border-yellow-800 rounded focus:text-red-700 focus:border-2 focus:bg-red-100 sm:text-base focus:outline-none focus:border-yellow-400" placeholder="Heslo" />
          </div>
        </div>
        <div class="">
            <button type="submit" class="text-center font-sans leading-tight ring-inset px-4 py-2.5 font-semibold text-red-100 bg-red-700 rounded-md focus:shadow-outline">
                <div class="flex flex-row">
                    <span class="mr-2">Přihlásit se do systému</span>
                    <svg class="inline w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                </div>
            </button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
    name: "PatronLogin-Dawinci"
}
</script>