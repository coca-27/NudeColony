<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="center-box pre-header">
            <div class="pink-box center-box">
              <div class="py-md-4 text-center">
                <img class="countdown-icon small" src='../assets/img/tree.png' />
              </div>
            </div>
          </div>
          <div class="modal-header">
            Join the community
          </div>

          <div class="modal-body">
            <slot name="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <input class="nude-input" placeholder="Enter Your E-mail Address" />
              <button @click="sendMail" class='pink-button modal-button'>Buy Now</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      close () {
        this.$emit('close');
      },
      sendMail () {
        
      }
    }
  };
</script>