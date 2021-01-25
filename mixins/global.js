export default {
  computed: {
    isFormValid() {
      return !this.$v.$invalid
    },
    spinner() {
      return this.$store.state.spinner.spinner
    },
    spinnerFor() {
      return this.$store.state.spinner.spinnerFor
    }
  },
  methods: {
    toggleSpinner(spinnerFor, value) {
      this.$store.commit('setSpinner', {
        spinnerFor: spinnerFor,
        value: value
      })
    },
    swalAlert(type, message) {
      this.$swal({
        icon: type,
        title: message,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      })
    },
    token() {
      return {
        headers: { Authorization: localStorage.getItem('token') }
      }
    },
    getAuthUser() {
      this.$store
        .dispatch('auth/getAuthUser', this.token())
        .catch(() => console.log('No autenticado'))
    }
  }
}