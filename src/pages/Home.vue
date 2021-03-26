<template>
    <div>
        <app-header />
        <div class="main">
            <b-row class="section">
                <b-col md='4' cols='12'>
                    <div class='md-pl-4'>
                        <div class="pink-box">
                            <div class="box-title text-center">count down to big bang</div>
                            <div class="py-4 text-center">
                                <img class="countdown-icon" src='../assets/img/tree.png' />
                            </div>
                            <div>
                                <countdown />
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col md='7' cols='12'>
                    <div class='top-section-center'>
                        <div class="One-Month-Left-To-Th">
                            One Month Left To The Big Bang. Humanity is about to rise from an absolute not<span class="text-style-1">h</span>
                        </div>
                        <div class="Life-on-the-planet-w py-3 md-px-4 pl-2">
                            Life on the planet will begin with the arrival of Adam and Eve. 
                            <span class="text-style-1">Nude Colony NFTs</span> are carefully designed to give people a chance to join the first human community on the planet and build a better future.
                        </div>
                        <div>
                            <button class='btn pink-button' @click="showMailModal">BUTTON TEXT</button>
                            <MailModal v-show="isMailModalVisible" @close="closeMailModal" />
                            <JoinModal v-show="isJoinModalVisible" @close="closeJoinModal" />
                            <TourChartModal v-show="isChartModalVisible" @close="closeChartModal" />                            
                        </div>                        
                    </div>
                </b-col>
                <b-col md='1' class="d-none d-md-block text-right">
                    <img src='../assets/img/snake.png' class="img-snake"/>
                </b-col>
            </b-row>
            <b-row class="section">
                <b-col offset-md="2" md="8" cols="12">
                    <div class="rarety-title d-none d-md-block">Rarety</div>
                    <b-row class="rarebar-box d-none d-md-flex">
                        <b-col class="rare-1"></b-col>
                        <b-col class="rare-2"></b-col>
                        <b-col class="rare-3"></b-col>
                        <b-col class="rare-4"></b-col>
                        <b-col class="rare-5"></b-col>
                        <b-col class="rare-6"></b-col>
                        <b-col class="rare-7"></b-col>
                        <b-col class="rare-8"></b-col>
                    </b-row>
                    <div class='d-flex'>
                        <div class="rarebar-mobile">
                            <div class="rare-1"></div>
                            <div class="rare-2"></div>
                            <div class="rare-3"></div>
                            <div class="rare-4"></div>
                            <div class="rare-5"></div>
                            <div class="rare-6"></div>
                            <div class="rare-7"></div>
                            <div class="rare-8"></div>
                        </div>
                        <div class="rarety-dst-box d-md-flex" @click="showChartModal">
                            <div :key="`rarety-dst-${index}`" v-for="(item, index) in rarety_dst" class="rarety-dst-item">
                                <div class="rarety-dst-NTFS">{{item.NTFS_Amount}}<span>NTFS</span></div>
                                <div class="rarety-dst-ETH">{{item.ETH_Amount}}<span>  ETH</span></div>
                                <div class="rarety-dst-barback">
                                    <div class="rarety-dst-bar" :style="{width:`${item.Bar_amount}`}"></div>
                                </div>
                            </div>
                            <div class="rarety-avatar1"><img src="../assets/img/asset4.png" alt=""></div>
                            <div class="rarety-avatar2"><img src="../assets/img/asset2.png" alt=""></div>
                            <div class="rarety-avatar3"><img src="../assets/img/asset1.png" alt=""></div>
                        </div>
                    </div>
                    <div class="rarety px-4 pt-3">
                        <span class='text-style-1'>Over 5%</span> of all Nude Colony NFTs have been sold. <br>
                        <span class='text-style-2'>28 days - 12:32:08</span> until the reveal of all of Nude Colony inhabitants.
                    </div>
                </b-col>
            </b-row>
            <div class="section no-margin">
                <VueSlickCarousel :arrows="false" :dots="false" v-bind="settings">
                    <div class='p-3' :key="`carousel-item-${index}`" v-for='(item, index) in carousel_items'>
                        <div class="pink-box center-box carousel-box">
                            <img class="carousel-img" :src="getPic(`${item.img}`)" />    
                        </div>
                        <div class="carousel-text">
                            {{item.title}}
                        </div>
                    </div>
                </VueSlickCarousel>
                <div class="text-center carousel-btn">
                    <button class="btn btn-primary" @click="showJoinModal">JOIN THE COLONY</button>
                </div>
            </div>
            <b-row class="section font-weight-bold">
                <b-col md="4" cols="12" align-self="start">
                    <div class="section-title">ABOUT</div>
                </b-col>
                <b-col md="4" cols="12" class="about-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                </b-col>
                <b-col md="4" cols="12" align-self="end">
                    <div class="d-none d-md-flex align-items-center">
                        <img src="../assets/img/arrow-right.png" />
                        <div class="ml-md-4 ml-0">
                            <div class='third-col-title'>WHY?</div>
                            <div class="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-md-none">
                        <div class="arrow-block">
                            <img src="../assets/img/arrow-down.png" class="img-down"/>
                        </div>
                        <div>
                            <div class='third-col-title'>WHY?</div>
                            <div class="why-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="section font-weight-bold">
                <b-col md="4" cols="12" align-self="start">
                    <div class="section-title">TEAM</div>
                </b-col>
                <b-col md="4" cols="12" class="about-desc" >
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br>                    
                    </div>
                    <b-row class="mt-4">
                        <b-col>
                            <div>
                                <img src="../assets/img/facebook.png" />
                                <img src="../assets/img/twitter.png" class="ml-2"/>
                            </div>
                            <div class="contact-name mt-2">
                                JOE DOE
                            </div>
                            <div class="contact-pos mt-1">
                                Co-Founder
                            </div>
                        </b-col>
                        <b-col>
                            <div>
                                <img src="../assets/img/facebook.png" />
                                <img src="../assets/img/twitter.png" class="ml-2"/>
                            </div>
                            <div class="contact-name mt-2">
                                JOE DOE
                            </div>
                            <div class="contact-pos mt-1">
                                Co-Founder
                            </div>
                        </b-col>
                    </b-row>

                </b-col>
                <b-col>
                </b-col>
            </b-row>
        </div>
         <div class="footer">
            <div class='d-flex flex-column align-items-center justify-content-center'>
                <div class="footer-title text-center">count down to big bang</div>
                <div class="py-3">
                    <countdown />
                </div>
                <div class="text-center mb-2">
                    <button class='pink-button'>JOIN THE COLONY</button>
                </div>
            </div>
        </div>
        <app-footer />
    </div>
</template>
<script>
import AppHeader from '../layout/header.vue';
import AppFooter from '../layout/footer.vue';
import Countdown from '../components/countdown.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import MailModal from '../components/EmailDropModal.vue';
import JoinModal from '../components/JoinModal.vue';
import TourChartModal from '../components/TourChartModal.vue';
export default {
    components: {
        AppHeader,
        AppFooter,
        Countdown,
        VueSlickCarousel,
        MailModal,
        JoinModal,
        TourChartModal
    },
    data () {
        return {
            carousel_items: [
                {img: 'asset1', title: 'NFT NAME'},
                {img: 'asset2', title: 'NFT NAME'},
                {img: 'asset3', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset1', title: 'NFT NAME'},
                {img: 'asset2', title: 'NFT NAME'},
                {img: 'asset3', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
                {img: 'asset1', title: 'NFT NAME'},
                {img: 'asset2', title: 'NFT NAME'},
                {img: 'asset3', title: 'NFT NAME'},
                {img: 'asset4', title: 'NFT NAME'},
            ],
            settings: {
                "dots": false,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 6,
                "slidesToScroll": 1,
                "touchThreshold": 5
            },
            rarety_dst : [
                {NTFS_Amount: '120', ETH_Amount: '0.03', Bar_amount: '100%'},
                {NTFS_Amount: '500', ETH_Amount: '0.1', Bar_amount: '100%'},
                {NTFS_Amount: '400', ETH_Amount: '0.3', Bar_amount: '100%'},
                {NTFS_Amount: '400', ETH_Amount: '0.5', Bar_amount: '5%'},
                {NTFS_Amount: '400', ETH_Amount: '0.8', Bar_amount: '0%'},
                {NTFS_Amount: '500', ETH_Amount: '1.5', Bar_amount: '0%'},
                {NTFS_Amount: '2', ETH_Amount: '5', Bar_amount: '0%'},
            ],
            isMailModalVisible: false,
            isJoinModalVisible: false,
            isChartModalVisible: false
        }
    },
    methods: {
        getPic (pic) {
            const images = require.context('../assets/img/', false, /\.png$/)
            return images(`./${pic}.png`)
        },
        showMailModal () {
            this.isMailModalVisible = true;
        },
        closeMailModal () {
            this.isMailModalVisible = false;
        },
        showJoinModal () {
            this.isJoinModalVisible = true;
        },
        closeJoinModal () {
            this.isJoinModalVisible = false;
        },
        showChartModal () {
            this.isChartModalVisible = true;
        },
        closeChartModal () {
            this.isChartModalVisible = false;
        }        
    },
    created () {
        console.log(window.innerWidth);
        if (window.innerWidth < 600) {
            this.settings.slidesToShow = 2;
        }
    }    
}
</script>
