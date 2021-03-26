<template>
    <div>
        <app-header />
        <div class="main">
            <b-row class="section">
                <b-col md='7' cols='12'>
                    <div class='md-pl-4 md-py-5'>
                        <div class="section-title">
                            WALLET
                        </div>
                        <div class="py-3">
                            <span class="section-sub-title ">YOUR WALLET: </span>
                            <span class="Life-on-the-planet-w md-px-5"> {{wallet_id}} </span>
                        </div>
                        <div class="Life-on-the-planet-w py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </div>
                        <div class="py-3">
                            <button class='pink-button'>INCREASE THE POPULATION OF YOUR COLONY</button>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="section">
                <b-col md='3' sm='12'>
                    <div class='md-pl-4 md-py-5 py-2'>
                        <div class="section-title">
                            <div class="d-none d-md-block">Your <br> nudecolony</div>
                            <div class="d-md-none">Your Colony</div>
                        </div>
                    </div>
                </b-col>
                <b-col md='9' sm='12'>
                    <div class='md-pl-4 md-py-5 pl-4'>
                        <div class="Life-on-the-planet-w">
                           Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore.
                        </div>
                    </div>
                    <div class='pl-4 py-2'>
                        <b-row >
                            <b-col md='3' cols='6' class="py-3" :key="`carousel-item-${index}`" v-for='(item, index) in carousel_items'>
                                <div class="pink-box text-center">
                                    <img class="carousel-img wallet" :src="getPic(`${item.img}`)" />    
                                </div>
                                <div class="carousel-text">
                                    {{item.title}}
                                </div>
                            </b-col> 
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </div>
        <app-footer />
    </div>
</template>
<script>
import AppHeader from '../layout/header.vue';
import AppFooter from '../layout/footer.vue';
export default {
    components: {
        AppHeader,
        AppFooter,
    },
    data () {
        return {
            wallet_id:  '',
            carousel_items: [
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
            ],
        }
    },
    created () {
        this.wallet_id = 'exjsad912392103jzkxx349491';
    },
    methods: {
        getPic (pic) {
            const images = require.context('../assets/img/', false, /\.png$/)
            return images(`./${pic}.png`)
        },
    }
}
</script>