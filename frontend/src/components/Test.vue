<template>
    <div>
        <h1>Test</h1>
        <p>Test</p>
    </div>
</template>
<script lang="ts">
import type {AxiosInstance} from 'axios'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    catTags: string[]
  }
}

export default {
    name: 'TestComponent',
    mounted() {
        console.log('Component mounted.')
        this.$axios.get('/artists/test/')
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>