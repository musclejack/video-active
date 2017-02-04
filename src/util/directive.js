import Vue from 'vue'

Vue.directive('tap', {
    bind: function (el, binding, vnode) {
        let startTime,
            endTime,
            during
        el.addEventListener('touchstart', (e) => {
            startTime = new Date().getTime()
        })
        el.addEventListener('touchend', (e) => {
            endTime = new Date().getTime()
            during = endTime - startTime
            if (during < 500) {
                binding.value.handle(el)
            }
        })
    }
})

Vue.directive('onhold', {
    bind: function (el, binding, vnode) {
        let startTime,
            endTime,
            during
        el.addEventListener('touchstart', (e) => {
            startTime = new Date().getTime()
        })
        el.addEventListener('touchend', (e) => {
            endTime = new Date().getTime()
            during = endTime - startTime
            if (during > 700) {
                binding.value.handle(el)
            }
        })
    }
})

Vue.directive('anmimatonEnd', {
    bind: function (el, binding, vnode) {
        if (binding.value.start) binding.value.start(el)
        el.addEventListener('animationend', (e) => {
            if (binding.value.end) binding.value.end(el)
        })
    }
})

Vue.directive('transitionnEnd', {
    bind: function (el, binding, vnode) {
        if (binding.value.start) binding.value.start(el)
        el.addEventListener('transitionend', (e) => {
            if (binding.value.end) binding.value.end(el)
        })
    }
})

Vue.directive('touchbtn', {
    bind: function (el, binding, vnode) {
        let start = false
        el.addEventListener('touchstart', (e) => {
            if (start) return
            el.style.transition = "background-color .25s ease"
            el.style.backgroundColor = binding.value.color
        })
        el.addEventListener('transitionend', (e) => {
            start = !start
            el.style.backgroundColor = ''
        })
    }
})
Vue.directive('focus', {
    bind: function (el, binding, vnode) {
        el.addEventListener('focus', (e) => {
            if(binding.value.handle) binding.value.handle()
            // el.parentNode.className += " focus"
            // else el.parentNode.style.borderColor = "rgba(226, 40, 0, 1)"
        })
        el.addEventListener('blur', (e) => {
            // el.parentNode.className = el.parentNode.className.replace("focus","")
        })
    }
})
