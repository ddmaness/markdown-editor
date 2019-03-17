var app = new Vue({ 
	el: '#app',
	data: {
        output: '<h1>Markdown Output Will Display Here</h1>',
    },
    methods: {
        updateOutput: function(e) {
            this.output = marked(e.target.value);
        }
    },
    template: `
        <main>
            <h1>Vue Markdown Editor</h1>
            <div class="editor">
                <textarea v-on:keyup="updateOutput"></textarea>
                <div class="editor__output" v-html="output">
                </div>
            </div>
        </main>   
    `
});