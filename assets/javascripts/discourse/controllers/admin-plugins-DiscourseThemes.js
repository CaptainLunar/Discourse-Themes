export default Ember.Controller.extend({
    DiscourseThemesVisible: false,

    actions: {
        showTentacle() {
            this.set('DiscourseThemesVisible', true);
        }
    }
});
