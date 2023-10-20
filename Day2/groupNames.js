//Group names according to the initial character

var names = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];


var nameGroups = {};
for (var i = 0; i < names.length; i++) {
    var nameValue = names[i];
    if(typeof nameValue!=="string"){
        continue;
    }
    var initialChar = nameValue.charAt(0);
    
    if (nameGroups[initialChar]) {
        nameGroups[initialChar].push(nameValue);
    } else {
        nameGroups[initialChar] = [nameValue];
    }
}
var groupedNames = Object.values(nameGroups);
groupedNames.forEach(function(group) {
    console.log(group);
});