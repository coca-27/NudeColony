<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="text-right">
                <img src="../assets/img/close.png" class="cursor-pointer" @click="close" />
            </div>  
          <div class="modal-header">
            Tour Chart
          </div>

          <div class="modal-body">
              <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </div>
              <div class="center-box mt-2">
                  <div class="center-box mr-3">
                    <div class="rect-dot most-common mr-2" />
                    <div>MOST COMMON</div>
                  </div>
                  <div class="center-box mr-3">
                    <div class="rect-dot common mr-2" />
                    <div>COMMON</div>
                  </div>
                  <div class="center-box mr-3">
                    <div class="rect-dot rare mr-2" />
                    <div>RARE</div>
                  </div>
                  <div class="center-box">
                    <div class="rect-dot most-rare mr-2" />
                    <div>MOST RARE</div>
                  </div>
              </div>

          </div>
            <div class="mt-5">
                <div class="mb-3" :key="`tour-line-${index}`" v-for="(tour, index) in tours">
                    <div>
                        <div :class="`rare-${tour.level} tour-tt-bar`" />
                    </div>
                    <b-row>
                        <b-col class="tour-label" md="3">TOUR {{tour.level}}:</b-col>
                        <b-col md="9">
                            <div class="center-box">
                                <div 
                                    :key="`tour-count-${idx}`" 
                                    :style="`width: ${getLevelPercent(tour.level, dt.count)}%`"
                                    v-for="(dt, idx) in tour.data"
                                    >
                                    <template v-if="dt.count > 0"> 
                                        <div :class="`rare-${getRareType(dt.level)} mb-1`"/>
                                        <div class="tour-count-label">{{dt.count}}</div>
                                    </template>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>            
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    data () {
        return {
            tours: [
                {level: 1, data: [{level: 1, count: 50}, {level: 2, count: 40}, {level: 3, count: 30}, {level: 4, count: 15}]},
                {level: 2, data: [{level: 1, count: 48}, {level: 2, count: 36}, {level: 3, count: 28}, {level: 4, count: 20}]},
                {level: 3, data: [{level: 1, count: 46}, {level: 2, count: 36}, {level: 3, count: 30}, {level: 4, count: 20}]},
                {level: 4, data: [{level: 1, count: 36}, {level: 2, count: 40}, {level: 3, count: 10}, {level: 4, count: 16}]},
                {level: 5, data: [{level: 1, count: 0}, {level: 2, count: 40}, {level: 3, count: 28}, {level: 4, count: 23}]},
                {level: 6, data: [{level: 1, count: 0}, {level: 2, count: 0}, {level: 3, count: 12}, {level: 4, count: 36}]},
                {level: 7, data: [{level: 1, count: 0}, {level: 2, count: 0}, {level: 3, count: 0}, {level: 4, count: 2}]},
            ]
        }
    },
    methods: {
        close () {
            this.$emit('close');
        },
        sendMail () {
            
        },
        getLevelPercent (level, count) {
            const trs = this.tours.find((tr) => tr.level === level);
            let totals = 0;
            if (trs) {
                trs.data.forEach(function (item) {
                        totals += item.count;
                    });
                    
                if (totals) {
                    console.log(count * 100 / totals)
                    return count * 100 / totals;
                } else {
                    return 0;
                }                    
            }
            return 0;
        },
        getRareType (index) {
            if (index === 1) return 1;
            else if (index === 2) return 4;
            else if (index === 3) return 5;
            else return 7;

        }
    }
};
</script>