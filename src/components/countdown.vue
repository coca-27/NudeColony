<template>
    <vue-countdown :time="28.32 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
        <div class="countdown-timer">
            <div class="d-flex align-items-start justify-content-center">
                <div>
                    <div class="countdown-timer-value">{{ days }}</div>
                    <div class="countdown-timer-label">DAYS</div>
                </div>
                <div class="countdown-timer-value">:</div>
                <div>
                    <div class="countdown-timer-value">{{ hours }}</div>
                    <div class="countdown-timer-label">HOURS</div>
                </div>
                <div class="countdown-timer-value">:</div>
                <div>
                    <div class="countdown-timer-value">{{ minutes }}</div>
                    <div class="countdown-timer-label">MINS</div>
                </div>
                <div class="countdown-timer-value">:</div>
                <div>
                    <div class="countdown-timer-value">{{ seconds }}</div>
                    <div class="countdown-timer-label">SECS</div>
                </div>                                                
            </div>
        </div>
    </vue-countdown>
</template>
<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {    
    components: {
        VueCountdown
    }
}
</script>
