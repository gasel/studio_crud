<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Studio CRUD</router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                        <router-link exact-active-class="active" to="/category" class="nav-item nav-link">Category</router-link>
                        <a class="button is-light" v-on:click='logout' id='logout-button'> Logout </a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {
        methods: {
            async logout () {
                await this.axios.post('/logout').then(response=>{
                }).catch(error=>{
                    console.log(error)
                })

                // Navigate back to home
                this.$router.push({ path: '/' })
            }
        }
    }
</script>