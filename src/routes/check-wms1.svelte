<script lang="ts">
    
    const hidden = 'hidden'
    const block = 'block'
    let show_mobile_menu = 'hidden'
    
    function btnMenuClicked()  {
        show_mobile_menu = (show_mobile_menu == hidden)?block: hidden

    }

</script>
<!--nav bars goes here-->
<nav class="bg-gray-100">
    <div class="px-8 mx-auto border ">
        <div class="flex items-center justify-between">
            <div class="flex space-x-4">
                <!--logo-->
                <div >
                    <a class="flex items-center py-5 px-3 text-gray-700 hover:text-gray-900" href="#">
                        <svg class="h-6 w-6 mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span class="font-bold">Better dev</span>
                    </a>
                    
                </div>
                <!--primary nav-->
                <div class="hidden md:flex items-center space-x-1">
                    <a class="py-5 px-3 text-gray-700 hover:text-gray-900" href="#">Features</a>
                    <a class="py-5 px-3 text-gray-700 hover:text-gray-900" href="#">Pricing</a>
                </div>
            </div>
            <div>
                <!--secondary nav-->
                <div class="hidden md:flex items-center space-x-1">
                    <a class="py-5 px-3 " href="#">Login</a>
                    <a class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" href="#">Signup</a>
                </div>
                <!--mobile button goes here-->
                <div class="md:hidden flex items-center">
                    <button class="hover:bg-gray-200 hover:border hover:border-gray-300 transiction duration-300" on:click="{btnMenuClicked}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>
    <!--mobile menu-->
    <div class="md:hidden {show_mobile_menu} flex flex-col items-end bg-white" >
        <a class="py-1 px-4 text-sm hover:bg-gray-200 border w-40" href="#">Feature</a>
        <a class="py-1 px-4 text-sm hover:bg-gray-200 border w-40" href="#">Pricing</a>
    </div>
</nav>
<!--content goes here-->
<div class="py-32 text-center">
    <h2 class= "font-extrabold text-4xl"> Nav bars in Tailwindcss</h2>
</div>