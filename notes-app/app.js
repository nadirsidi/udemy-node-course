const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Add a new note
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Title for new note',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body of new note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Remove a note
yargs.command({
    command: 'remove',
    description: 'Remove the note',
    handler: function () {
        console.log("Removing the note.")
    }
})

// List notes
yargs.command({
    command: 'list',
    description: 'List notes',
    handler: function() {
        console.log("Listing notes.")
    }
})

// Read a note
yargs.command({
    command: "read",
    description: 'Read a note',
    handler: function() {
        console.log("Reading a note")
    }
})

yargs.parse()