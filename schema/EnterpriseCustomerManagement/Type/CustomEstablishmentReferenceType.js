var Modeler = require("../Modeler.js");
var className = 'TypeCustomEstablishmentReferenceType';

var TypeCustomEstablishmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEstablishmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEstablishmentReferenceType",
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
	  CustomEstablishmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEstablishmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEstablishmentReferenceType;
Modeler.register(TypeCustomEstablishmentReferenceType, "TypeCustomEstablishmentReferenceType");
