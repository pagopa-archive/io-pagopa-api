const apiconnWsdl =  require("apiconnect-wsdl");
const yaml = require("js-yaml");
const fs = require("fs");



const promise = apiconnWsdl.getJsonForWSDL("./wsdl/nodo/CdPerNodo.wsdl");

promise.then(function(wsdls: any){
	
	// Get Services from all parsed WSDLs
	const serviceData = apiconnWsdl.getWSDLServices(wsdls);

	// Loop through all services and genereate yaml file
	for (const  item in serviceData.services) {
		const serviceName = serviceData.services[item].service;
		const wsdlId = serviceData.services[item].filename;
		const wsdlEntry = apiconnWsdl.findWSDLForServiceName(wsdls, serviceName);
        const swagger = apiconnWsdl.getSwaggerForService(wsdlEntry, serviceName, wsdlId);
        fs.writeFile("./yaml-file/" + serviceName + ".yaml", yaml.safeDump(swagger),(err: any) => {
            if (err) throw err;
          })
	}
}, function (error: any) {
	console.log(error.message)
});