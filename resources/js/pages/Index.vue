<template>
    <div class="table-responsive py-3">
        <router-link to="add" class="btn btn-primary float-right mb-3">Tambah</router-link>
        <b-table striped hover :items="todos.data" :fields="fields" show-empty>
            <template v-slot:cell(status)="row">
                <span class="badge badge-success" v-if="row.item.status == 1">Selesai</span>
                <span class="badge badge-light" v-else>Active</span>
            </template>
        </b-table>

        <div class="float-right mt-3">
            <b-pagination
                v-model="currentPage"
                :total-rows="todos.total"
                :per-page="todos.per_page"
                aria-controls="my-table"
                v-if="todos.data && todos.data.length > 0"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex"

    export default {
        name: "TodoIndex",
        created() {
            this.getTodos()
        },
        data() {
            return {
                fields: [
                    {
                        key: 'name',
                        label: 'Jadwal',
                        sortable: true
                    },
                    {
                        key: 'note',
                        label: 'Deskripsi',
                        sortable: true
                    },
                    {
                        key: 'due_date',
                        label: 'Tanggal Berakhir',
                        sortable: true
                    },
                    'status', 'created_at', 'actions']
            }
        },
        watch: {
            currentPage(){
                this.getTodos()
            }
        },
        computed: {
            ...mapState('todo', {
                todos: state => state.todos
            }),
            currentPage: {
                get(){
                    return this.$store.state.todo.page
                },
                set(val){
                    console.log(val)
                    this.$store.state.todo.page = val
                }
            }
        },
        methods: {
            ...mapActions('todo', ['getTodos'])
        }
    }
</script>
