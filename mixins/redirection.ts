export default {
    methods: {
        redirectToListOfSite(): void {
            this.$router.push({
              path : '/sites'
            })
          }
    }
}