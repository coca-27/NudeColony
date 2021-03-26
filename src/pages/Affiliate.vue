<template>
    <div>
        <app-header />
        <div class="main">
            <b-row class="section">
                <b-col md='7' cols='12'>
                    <div class='md-pl-4 md-py-5'>
                        <div class="section-title">
                            Affiliate
                        </div>
                        <div class="Life-on-the-planet-w py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div class="py-4">
                            <b-row>
                                <b-col md='7' cols='12'>
                                    <div>
                                        <input class="nude-input w-100" placeholder="reflink12931293.nudecolony.io" />
                                    </div>
                                </b-col>
                                <b-col md='5' cols='12'>
                                  <button class='pink-button'>Copy link</button>
                                </b-col>
                            </b-row>
                        </div>
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