var names =["Yaakov","John","Jen","jason","paul","frank","larry","paula","laura","jim"];
for(var i = 0; i < names.length; i++) {
    var matches = names[i].match(/\b(\w)/g);
    var acronym = matches.join('');
    if (acronym === "J" || acronym === "j"){
        console.log("GoodBye " + names[i]);
    }
    else{
        console.log("Hello " + names[i]);
    }
}