<template>
    <div class="container">
        <h2>Add todo</h2>

        <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Todo Name"
                    label-for="input-1"
                    description="Create you title of todo list"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.name"
                        type="text"
                        required
                        placeholder="Enter your plan"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Notes" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.note"
                        required
                        placeholder="Enter note"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Status" label-for="input-3">
                    <b-form-select
                        id="input-3"
                        v-model="form.status"
                        :options="statusOption"
                        required
                    ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-4" label="Due date" label-for="input-4">
                    <v-date-picker
                        :available-dates="{start: new Date(), end: null}"
                        :input-props="{class:'form-control'}"
                        v-model="form.due_date"
                        :value="null"
                        color="indigo"
                        transition="slide-h"
                        visibility= "click"
                    />
                </b-form-group>

                <div class="float-right">
                    <b-button type="reset" variant="danger">Reset</b-button>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex"
    export default {
        name: "TodoAdd",
        data() {
            return {
                form: {
                    name: '',
                    note: '',
                    due_date: new Date(),
                    status: 0
                },
                statusOption: [{ text: 'Active', value: 0 }, { text: 'Done', value: 1 }],
                show: true
            }
        },
        methods: {
            ...mapActions('todo', ['simpanTodo']),
            onSubmit(evt) {
                evt.preventDefault()
                this.simpanTodo(this.form).then(() => {
                    this.onReset(evt)
                });
                this.$router.push({name:'todo.index'})
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.note = ''
                this.form.due_date = new Date()
                this.form.status = 0
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>
