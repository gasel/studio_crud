<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Category</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Code</label>
                                    <input type="text" class="form-control" v-model="category.code">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="category.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="category.description">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Category</label>
                                    <select class="form-select" aria-label="Parent category" v-model="category.parent_id">
                                        <option
                                        v-for="cat in categories"
                                        :value="cat.id"
                                        :key="cat.id"
                                        >{{ cat.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"update-category",
    data(){
        return {
            categories:[],
            category:{
                code:"",
                name:"",
                description:"",
                parent_id:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.getCategories()
        this.showCategory()
    },
    methods:{
        async getCategories(){
            await this.axios.get('/category').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        async showCategory(){
            await this.axios.get(`/category/${this.$route.params.id}`).then(response=>{
                const { code,name,description,parent_id } = response.data
                this.category.code = code
                this.category.name = name
                this.category.description = description
                this.category.parent_id = parent_id
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/category/${this.$route.params.id}`,this.category).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>