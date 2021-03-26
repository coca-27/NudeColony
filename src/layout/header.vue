<template>
    <div>
        <b-container fluid>
            <div class="header d-flex align-items-center justify-content-between md-px-4 py-2">
                <router-link to="/">
                    <img class="logo" src="../assets/img/logo.png" />
                </router-link>
                <b-nav class='main-menu'>
                    <router-link to="/affiliate">Affiliate</router-link>
                    <router-link to="/">About</router-link>
                    <router-link to="/wallet">Wallet</router-link>
                    <router-link to="/faq">F.A.Q</router-link>
                </b-nav>
                <span class='mobile-menu-toggler' @click="showMobileMenu">
                    <img src="../assets/img/toggler.png" />
                </span>
            </div>
        </b-container>
        <div class='mobile-menu' v-show="isShowMobileMenu">
            <transition name="modal">
                <div class='mobile-menu-content'>    
                    <div class="mobile-menu-close">
                        <img src="../assets/img/close.png" @click="hideMobileMenu" />
                    </div>
                    <div class="mobile-menu-item">
                        <b-link href="affiliate">Affiliate</b-link>
                    </div>
                    <div class="mobile-menu-item">
                        <b-link href="#foo">About</b-link>
                    </div>
                    <div class="mobile-menu-item">
                        <b-link href="wallet">Wallet</b-link>
                    </div>
                    <div class="mobile-menu-item">
                        <b-link href="faq">F.A.Q</b-link>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isShowMobileMenu: false
        }
    },
    methods: {
        showMobileMenu() {
            console.log();
            this.isShowMobileMenu = true;
        },
        hideMobileMenu() {
            this.isShowMobileMenu = false;
        }

    }
}
</script>
