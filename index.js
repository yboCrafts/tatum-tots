const app = {
    init: function(formSelector) {
        this.max = 0

        document
        .querySelector('#flickForm')
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

app.init('#flickForm')