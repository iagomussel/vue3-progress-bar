<template>
  <component
    :is="progressBarType"
    class="vuejs-progress-bar"
    :value="value"
    :options="options"
  />
</template>

<script>
import { ProgressBarMixin } from '../mixins/ProgressBarMixin'
import ProgressBarBattery from './ProgressBarBattery'
import ProgressBarCircle from './ProgressBarCircle'
import ProgressBarCylinder from './ProgressBarCylinder'
import ProgressBarLine from './ProgressBarLine'

export default {
  name: 'ProgressBar',
  components: {
    ProgressBarBattery,
    ProgressBarCircle,
    ProgressBarCylinder,
    ProgressBarLine
  },
  mixins: [ProgressBarMixin],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    value: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.vuejs-progress-bar {
  display: inline-block;
  align-content: stretch;
  width: 0;
  line-height: 20px;
}
</style>
