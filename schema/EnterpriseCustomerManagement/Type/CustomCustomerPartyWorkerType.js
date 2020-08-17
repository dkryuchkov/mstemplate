var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyWorkerType';

var TypeCustomCustomerPartyWorkerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyWorkerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyWorkerType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CustomCustomerPartyWorkerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyWorkerType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyWorkerType;
Modeler.register(TypeCustomCustomerPartyWorkerType, "TypeCustomCustomerPartyWorkerType");
