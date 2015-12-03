## Modal dialog usage

Instantiate a new modal with some default options:

    const defaultModalOptions = {
      text: 'You forgot to set your text.',
      width: 500,
      height: 300,
      lightDismiss: false
    };

    this.modal = new Modal(this.game, defaultModalOptions);

Use the show method to show it and override default options:

    const modalOptions = {
      text: 'A light dismiss.',
      lightDismiss: true,
      callback: () => {
        // some great stuff to do once the modal has been dismissed
      },
      context: this
    };

    this.modal.show(modalOptions);

If the modal is not light dismiss then a button might be needed:

    const modalOptions = {
      text: 'A not so light dismiss.',
      lightDismiss: false,
      callback: () => {
        // some great stuff to do once the modal has been dismissed
      },
      context: this,
      buttons: [{
        text: 'ok',
        callback: () => {
          // some great stuff to do once the button has been pressed
          this.modal.hide();
        },
        context: this
      }]
    };

    this.modal.show(modalOptions);

## License

This project is released under the MIT License.