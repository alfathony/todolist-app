<template>
    <b-container>
        <b-row class="mb-3">
            <b-col>
                <b-button pill variant="primary" :to="{ name: 'todo.index' }"><b-icon-arrow-left></b-icon-arrow-left> Back to index</b-button>
            </b-col>
        </b-row>
        <b-card title="Detail task">
            <b-card-text>
                {{ todo.name }}
            </b-card-text>

            <b-card-text>{{ todo.note }}</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
    </b-container>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "todoDetail",
        created() {
            this.getDetailTodo(this.$route.params.id);
        },
        computed: {
            ...mapState('todo', {
                todo: state => state.todo
            }),
        },
        methods: {
            ...mapActions('todo', ['getDetailTodo'])
        }
    }
</script>

<style scoped>

</style>
