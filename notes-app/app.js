const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove a note
yargs.command({
    command: 'remove',
    description: 'Remove the note',
    builder: {
        title: {
            description: 'Title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// List notes
yargs.command({
    command: 'list',
    description: 'List notes',
    handler() {
        notes.listNotes()
    }
})

// Read a note
yargs.command({
    command: "read",
    description: 'Read a note',
    builder: {
        title: {
            description: 'Title of note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()