var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayerPersonPartyType';

var TypeCustomPayerPersonPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayerPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayerPersonPartyType",
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
	  CustomPayerPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayerPersonPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayerPersonPartyType;
Modeler.register(TypeCustomPayerPersonPartyType, "TypeCustomPayerPersonPartyType");
