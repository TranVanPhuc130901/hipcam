$('.chosen-select').chosen({ width: '100%' });
var input = document.querySelector('#phone');
window.intlTelInput(input, {
    separateDialCode: true,
});
