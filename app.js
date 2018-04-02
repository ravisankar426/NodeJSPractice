const os=require('os');
const notes=require('./notes');
const yargs=require('yargs');

var note={
    "id":0,
	"author":"Ravi U",
	"date":"03/30/2018"
};

var args=yargs.argv;

switch(args._[0]){
	case "AddNote": var note={
								"id":0,
								"author":args.author,
								"date":new Date()
							};
					notes.addNote(note);					
					console.log('note added successfully...!!!');
					break;
	case "GetNotes":var result=notes.getNotes();
					console.log(result);
					break;
	case "DeleteNote":notes.deleteNote(args.id);
					var result=notes.getNotes();
					console.log(result);
					break;
	default:notes.getNotes();					
					break;
}
