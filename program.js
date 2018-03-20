process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
	if(input !== null) {
        // teraz jest sens cokolwiek wyświetlać :)
            process.stdout.write(input);
    }
});