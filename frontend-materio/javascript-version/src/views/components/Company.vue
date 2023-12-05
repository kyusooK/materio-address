<template>
    <div>
        <String label="Name" v-model="value.name" :editMode="editMode"/>
        <Payment offline label="Payment" v-model="value.payment" :editMode="editMode" @change="change"/>
        <User offline label="User" v-model="value.user" :editMode="editMode" @change="change"/>
        <Photo offline label="Photo" v-model="value.photo" :editMode="editMode" @change="change"/>
        <Email offline label="Email" v-model="value.email" :editMode="editMode" @change="change"/>
        <Address offline label="Address" v-model="value.address" :editMode="editMode" @change="change"/>
        <Weather offline label="Weather" v-model="value.weather" :editMode="editMode" @change="change"/>
        <Money offline label="Money" v-model="value.money" :editMode="editMode" @change="change"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>

import BaseEntity from './base-ui/BaseEntity.vue'
import String from './primitives/String.vue'
import Payment from './vo/Payment.vue'
import User from './vo/User.vue'
import Photo from './vo/Photo.vue'
import Email from './vo/Email.vue'
import Address from './vo/Address.vue'
import Weather from './vo/Weather.vue'
import Money from './vo/Money.vue'

export default {
    name: 'Company',
    mixins:[BaseEntity],
    components:{
        String,
        Payment,
        User,
        Photo,
        Email,
        Address,
        Weather,
        Money,
    },
    
    data: () => ({
        path: "companies"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
