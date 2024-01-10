$.ajax ({
    url: 'https://api.github.com/repos/Kirithor/MyFirstRepo',
    success: function(response) {
        console.log(response)
    }
})

$.ajax ({
    url: 'https://api.github.com/repos/Kirithor/MyFirstRepo',
    processData: false,
    success: function(response) {
        console.log(response)
        const serialized = JSON.stringify(response);
        console.log(serialized);
        const deserialized = JSON.parse(serialized);
        console.log(deserialized);
    }
})