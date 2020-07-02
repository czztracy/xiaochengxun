module.exports = Behavior({
  data: {
      sharedText: 'This is a piece of data shared between pages.'
  },
  methods: {
      sharedMethod() {
          this.data.sharedText === 'This is a piece of data shared between pages.'
          this.setData({
            sharedText: "0000000000"
          })
      }
  }
})