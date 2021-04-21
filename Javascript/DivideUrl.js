var Div="https://www.google.com/search/test.js?ok=1"
var protocol=""


var protocol= Div.split("://")
var subdomain=protocol[1].split(".")
var targetfile=Div.split("/")
targetfile=targetfile[targetfile.length-1]
targetfile=targetfile.split("?")
var domainname=Div.split("/")
var argument=Div.split("?")

console.log("protocol:", protocol[0])
console.log("subdomain:", subdomain[0])
console.log("targetfile:", targetfile[0])
console.log("domainname:",domainname[2])
console.log("argument:","?"+argument[1])