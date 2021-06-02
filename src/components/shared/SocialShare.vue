<template>
    <div class="flex justify-center bg-white">
        <div class="flex flex-wrap items-center my-auto">
                <div class="relative ml-24">
                <button class="relative flex sharebtn hover:opacity-100 focus:outline-none focus:border-blue-400" title="click to enable menu">
                    <svg class="w-6 h-6 svg-icon" viewBox="0 0 20 20">
                        <path d="M16.76,7.51l-5.199-5.196c-0.234-0.239-0.633-0.066-0.633,0.261v2.534c-0.267-0.035-0.575-0.063-0.881-0.063c-3.813,0-6.915,3.042-6.915,6.783c0,2.516,1.394,4.729,3.729,5.924c0.367,0.189,0.71-0.266,0.451-0.572c-0.678-0.793-1.008-1.645-1.008-2.602c0-2.348,1.93-4.258,4.303-4.258c0.108,0,0.215,0.003,0.321,0.011v2.634c0,0.326,0.398,0.5,0.633,0.262l5.199-5.193C16.906,7.891,16.906,7.652,16.76,7.51 M11.672,12.068V9.995c0-0.185-0.137-0.341-0.318-0.367c-0.219-0.032-0.49-0.05-0.747-0.05c-2.78,0-5.046,2.241-5.046,5c0,0.557,0.099,1.092,0.292,1.602c-1.261-1.111-1.979-2.656-1.979-4.352c0-3.331,2.77-6.041,6.172-6.041c0.438,0,0.886,0.067,1.184,0.123c0.231,0.043,0.441-0.134,0.441-0.366V3.472l4.301,4.3L11.672,12.068z"></path>
                    </svg>
                    <span class="inline-block pr-4 text-gray-800">Compartilhar</span>
                </button>
               
                <div class="absolute right-0 z-20 hidden w-48 mt-0 overflow-hidden bg-white border border-gray-100 rounded shadow-lg sharebtn-dropdown">
                    <ShareNetwork
                        network="facebook"
                        :url="`https://blog-terceiraidade.netlify.app/?post=${id}`"
                        :title="title"
                        :description="title"
                        :quote="title"
                    >
                        <div class="flex px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-messenger" class="w-5 h-5 mr-4 text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path></svg>
                            <span class="text-gray-600">Facebook</span>
                        </div>
                    </ShareNetwork>
                    <ShareNetwork
                        network="twitter"
                        :url="`https://blog-terceiraidade.netlify.app/?post=${id}`"
                        :title="title"
                    >
                        <div class="flex px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" class="w-5 h-5 mr-4 text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>
                            <span class="text-gray-600">Twitter</span>
                        </div>
                    </ShareNetwork>
                    
                    <ShareNetwork
                        network="whatsapp"
                        :url="`https://blog-terceiraidade.netlify.app/?post=${id}`"
                        :title="title"
                        :description="content"
                    >
                        <div class="flex px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100">
                            <svg class="w-5 h-5 mr-4 overflow-hidden bg-green-400 rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="white"/></svg>
                            <span class="text-gray-600">Whatsapp</span>
                        </div>
                    </ShareNetwork>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    
    props: {
        title: {
            required: true,
            type: String,
        },
        id: {
            required: true,
            type: Number,
        },
        content: {
            required: true,
            type: Number,
        },
    }
})
</script>


<style lang="postcss">
.sharebtn {
  /* @apply relative flex z-10 bg-white border rounded-md p-2 opacity-50 hover:opacity-100 focus:outline-none focus:border-blue-400; */
}

.sharebtn:focus + .sharebtn-dropdown {
  display: block;
}

.sharebtn-dropdown:hover {
     display: block; 
}

.sharebtn-dropdown {
  /* @apply absolute right-0 mt-0 w-48 bg-white rounded-sm overflow-hidden shadow-lg z-20 hidden border border-gray-100; */
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #686666;
}

</style>