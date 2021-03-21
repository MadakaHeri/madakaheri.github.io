export default {

  created(){
    this.frame_isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false
  },
  data: () => ({
    frame: {
      isShowDrawer: true,
    },
  }),

}