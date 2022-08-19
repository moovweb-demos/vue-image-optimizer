<template>
  <div class="flex justify-center justify-items-center h-screen grid grid-cols-1 gap-4">
  <!-- :srcset="this.imgSourceset" sizes="(max-width: 600px) 480px, 800px"  -->
  
  <form class="w-full max-w-xl">
    <div class="flex flex-wrap -mx-3 mb-6">
      <h1 class="center text-5xl shadow-md w-screen h-200 mb-5 p-5">Manipulate images with Moovweb image optimizer</h1>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Image URL
        </label>
        <input v-model="image_url"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="text">
        <p class="text-xs italic">
          You can use images with a full path like:
          <br>
          https://docs.layer0.co/_next/static/media/l0-to-edgio-light.5222d593.png
          <br/>
          OR data encoded like the one in the field
          <br/>

        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="width">
          Width
        </label>
        <input v-model="image_w"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="width" type="number" min="0">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="height">
          Height
        </label>
        <input v-model="image_h"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="height" type="number" min="0">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="quality">
          Quality
        </label>
        <input v-model="image_quality"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="quality" type="number"  min="0" max="100">
      </div>
      
    </div>
  </form>
 
  <div class="flex justify-center justify-items-center h-screen w-full pt-5">
        <img :src="composed_url">
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      image_url: 'http://edg.io/opt/layer0/?img=aHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9oYTh0cmNlMWdicGMvNTdlNE1yNU5qR3JPUzhRU1RIQUpNOS82YmYxYWE5OTk1MjljNGE1Yzc2ZGM1MTE0YjA0MjViZS9ob21lLWhlcm8tYmFja2dyb3VuZC0wMi53ZWJw',
      image_w: '600',
      image_h: '400',
      image_quality: '100',
      // full_image_path: 'https://opt.moovweb.net/?quality=30&img=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F68%2FGrass_dsc08672-nevit.jpg%2F2560px-Grass_dsc08672-nevit.jpg'
    }
  },
  computed: {
    composed_url() {
      return 'https://opt.moovweb.net/?img=' + encodeURIComponent(this.image_url)
        + '&quality=' + this.image_quality
        + '&width=' + this.image_w
        + '&height=' + this.image_h
    },
    imgSourceset() {
      const baseName = encodeURIComponent(this.image_url.toLowerCase())
      return `https://opt.moovweb.net/?width=480&img=${baseName} 480w, https://opt.moovweb.net/?width=800&img=${baseName} 800w`
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
