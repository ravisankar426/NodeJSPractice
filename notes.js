
const fs=require('fs');

var addNote=(note)=>{
    var notes=getJSONNotes();
    notes.push(note);
    note.id=getIdentityValue('notesLatestId');
    fs.writeFileSync('./data.json',JSON.stringify(notes));
    var sequence={"notesLatestId":note.id};
    fs.writeFileSync('./sequences.json',JSON.stringify(sequence));
};

var getNotes=()=>{
	return getJSONNotes();
};

var deleteNote=(id)=>{
	var notes=getJSONNotes();
	notes=notes.filter((note)=>note.id!=id);
    fs.writeFileSync('./data.json',JSON.stringify(notes));
};

var getJSONNotes=()=>{	
	var notes=fs.readFileSync('./data.json');
    notes=JSON.parse(notes);
	return notes;
};

var getIdentityValue=(sequence)=>{
	var sequences=getSequencesJSON();
	var identity=sequences[sequence];
	return identity+1;
}

var setIdentityValue=(sequence)=>{
	var sequences=getSequencesJSON();
	var identity=sequences[sequence];
	sequences[sequence]=parseInt(identity)+1;
	fs.writeFileSync('./sequences.json',JSON.stringify(sequences));
}

var getSequencesJSON=()=>{
	var sequenceString=fs.readFileSync('./sequences.json');
	return JSON.parse(sequenceString);
};

module.exports={
	addNote,
	getNotes,
	deleteNote,
	getIdentityValue,
	setIdentityValue

};