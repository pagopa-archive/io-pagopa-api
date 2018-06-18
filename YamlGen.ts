import * as apiconnWsdl from "apiconnect-wsdl";
import * as  yaml from "js-yaml";
import * as  fs from "fs";

var promise = apiconnWsdl.getJsonForWSDL("./wsdl/nodo/NodoPerPsp.wsdl");

promise.then(function(wsdls){
	
	// Get Services from all parsed WSDLs
	var serviceData = apiconnWsdl.getWSDLServices(wsdls);

	// Loop through all services and genereate yaml file
	for (var  item in serviceData.services) {
		var serviceName = serviceData.services[item].service;
		var wsdlId = serviceData.services[item].filename;
		var wsdlEntry = apiconnWsdl.findWSDLForServiceName(wsdls, serviceName);
        var swagger = apiconnWsdl.getSwaggerForService(wsdlEntry, serviceName, wsdlId);
        fs.writeFile("./yaml-file/" + serviceName + ".yaml", yaml.safeDump(swagger),(err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          })
	}
}, function (error) {
	console.log(error.message)
});