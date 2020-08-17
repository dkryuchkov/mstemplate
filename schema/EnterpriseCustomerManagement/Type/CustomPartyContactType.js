var Modeler = require("../Modeler.js");
var className = 'TypeCustomPartyContactType';

var TypeCustomPartyContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPartyContactType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyContactType",
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
	  CustomPartyContactType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyContactType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPartyContactType;
Modeler.register(TypeCustomPartyContactType, "TypeCustomPartyContactType");
