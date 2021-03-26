<template>
    <div>
        <app-header />
        <div class="main">
            <b-row class="section">
                <b-col md='7' cols='12'>
                    <div class='md-pl-4 md-py-5'>
                        <div class="section-title">
                            F.A.Q
                        </div>
                        <div class="mt-md-4">
                            <div class="py-3">
                                <span class="section-sub-title ">LOREM IPSUM</span>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail1==false" src="../assets/img/combined-shape.png" @click="isDetail1=!isDetail1"/>
                                    <img class="px-3 py-2" v-if="isDetail1==true" src="../assets/img/shape.png" @click="isDetail1=!isDetail1"/>
                                </div>
                                <div v-if="isDetail1" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail2==false" src="../assets/img/combined-shape.png" @click="isDetail2=!isDetail2"/>
                                    <img class="px-3 py-2" v-if="isDetail2==true" src="../assets/img/shape.png" @click="isDetail2=!isDetail2"/>
                                </div>
                                <div v-if="isDetail2" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail3==false" src="../assets/img/combined-shape.png" @click="isDetail3=!isDetail3"/>
                                    <img class="px-3 py-2" v-if="isDetail3==true" src="../assets/img/shape.png" @click="isDetail3=!isDetail3"/>
                                </div>
                                <div v-if="isDetail3" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail4==false" src="../assets/img/combined-shape.png" @click="isDetail4=!isDetail4"/>
                                    <img class="px-3 py-2" v-if="isDetail4==true" src="../assets/img/shape.png" @click="isDetail4=!isDetail4"/>
                                </div>
                                <div v-if="isDetail4" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail5==false" src="../assets/img/combined-shape.png" @click="isDetail5=!isDetail5"/>
                                    <img class="px-3 py-2" v-if="isDetail5==true" src="../assets/img/shape.png" @click="isDetail5=!isDetail5"/>
                                </div>
                                <div v-if="isDetail5" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                        <div class="mt-md-4">
                            <div class="py-3">
                                <span class="section-sub-title ">LOREM IPSUM</span>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail6==false" src="../assets/img/combined-shape.png" @click="isDetail6=!isDetail6"/>
                                    <img class="px-3 py-2" v-if="isDetail6==true" src="../assets/img/shape.png" @click="isDetail6=!isDetail6"/>
                                </div>
                                <div v-if="isDetail6" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail7==false" src="../assets/img/combined-shape.png" @click="isDetail7=!isDetail7"/>
                                    <img class="px-3 py-2" v-if="isDetail7==true" src="../assets/img/shape.png" @click="isDetail7=!isDetail7"/>
                                </div>
                                <div v-if="isDetail7" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail8==false" src="../assets/img/combined-shape.png" @click="isDetail8=!isDetail8"/>
                                    <img class="px-3 py-2" v-if="isDetail8==true" src="../assets/img/shape.png" @click="isDetail8=!isDetail8"/>
                                </div>
                                <div v-if="isDetail8" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>                           
                        </div>
                        <div class="mt-md-4">
                            <div class="py-3">
                                <span class="section-sub-title ">LOREM IPSUM</span>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail9==false" src="../assets/img/combined-shape.png" @click="isDetail9=!isDetail9"/>
                                    <img class="px-3 py-2" v-if="isDetail9==true" src="../assets/img/shape.png" @click="isDetail9=!isDetail9"/>
                                </div>
                                <div v-if="isDetail9" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail10==false" src="../assets/img/combined-shape.png" @click="isDetail10=!isDetail10"/>
                                    <img class="px-3 py-2" v-if="isDetail10==true" src="../assets/img/shape.png" @click="isDetail10=!isDetail10"/>
                                </div>
                                <div v-if="isDetail10" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail11==false" src="../assets/img/combined-shape.png" @click="isDetail11=!isDetail11"/>
                                    <img class="px-3 py-2" v-if="isDetail11==true" src="../assets/img/shape.png" @click="isDetail11=!isDetail11"/>
                                </div>
                                <div v-if="isDetail11" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div> 
                            <div class="white-rec py-2 my-2">
                                <div class="stretch-box">
                                    <span class="sub-title px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit? </span>                            
                                    <img class="px-3 py-2" v-if="isDetail12==false" src="../assets/img/combined-shape.png" @click="isDetail12=!isDetail12"/>
                                    <img class="px-3 py-2" v-if="isDetail12==true" src="../assets/img/shape.png" @click="isDetail12=!isDetail12"/>
                                </div>
                                <div v-if="isDetail12" class="code-pro-text px-3 py-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>                          
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
            isDetail1: false,
            isDetail2: false,
            isDetail3: false,
            isDetail4: false,
            isDetail5: false,
            isDetail6: false,
            isDetail7: false,
            isDetail8: false,
            isDetail9: false,
            isDetail10: false,
            isDetail11: false,
            isDetail12: false
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