var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayeeLegalEntityReferenceType';

var TypeCustomPayeeLegalEntityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayeeLegalEntityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayeeLegalEntityReferenceType",
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
	  CustomPayeeLegalEntityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayeeLegalEntityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayeeLegalEntityReferenceType;
Modeler.register(TypeCustomPayeeLegalEntityReferenceType, "TypeCustomPayeeLegalEntityReferenceType");
