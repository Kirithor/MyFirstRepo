$.ajax ({
    url: 'https://api.github.com/repos/Kirithor/MyFirstRepo',
    success: function(response) {
        console.log(response)
    }
})