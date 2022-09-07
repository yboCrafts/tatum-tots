const app = {
    init: function(selectors) {
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)

        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)            
        })
    },

    handleSubmit: function(ev) {        
        const f = ev.target;   
        const flick = {
            id: ++this.max,
            name: f.flickName.value,
        }
        console.log(flick)
        f.reset()
    },
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList'    
})