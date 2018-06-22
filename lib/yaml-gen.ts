const apiconnWsdl =  require("apiconnect-wsdl");
const yaml = require("js-yaml");
const fs = require("fs");



var promise = apiconnWsdl.getJsonForWSDL("./wsdl/nodo/CdPerNodo.wsdl");

promise.then(function(wsdls: any){
	
	// Get Services from all parsed WSDLs
	var serviceData = apiconnWsdl.getWSDLServices(wsdls);

	// Loop through all services and genereate yaml file
	for (var  item in serviceData.services) {
		var serviceName = serviceData.services[item].service;
		var wsdlId = serviceData.services[item].filename;
		var wsdlEntry = apiconnWsdl.findWSDLForServiceName(wsdls, serviceName);
        var swagger = apiconnWsdl.getSwaggerForService(wsdlEntry, serviceName, wsdlId);
        fs.writeFile("./yaml-file/" + serviceName + ".yaml", yaml.safeDump(swagger),(err: any) => {
            if (err) throw err;
            console.log('The file has been saved!');
          })
	}
}, function (error: any) {
	console.log(error.message)
});