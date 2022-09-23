export default {
    data() {
        return {
          showActionModal: false,
        };
      },
      methods: {
        showModal(): void {
          this.showActionModal = !this.showActionModal;
        },
      },
}