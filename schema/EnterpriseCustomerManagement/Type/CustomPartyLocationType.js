var Modeler = require("../Modeler.js");
var className = 'TypeCustomPartyLocationType';

var TypeCustomPartyLocationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPartyLocationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyLocationType",
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
	  CustomPartyLocationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyLocationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPartyLocationType;
Modeler.register(TypeCustomPartyLocationType, "TypeCustomPartyLocationType");
