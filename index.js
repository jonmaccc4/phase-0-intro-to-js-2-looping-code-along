function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--; 
    }
}

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}


console.log(writeCards(["Alice", "Bob", "Charlie"], "birthday"));
