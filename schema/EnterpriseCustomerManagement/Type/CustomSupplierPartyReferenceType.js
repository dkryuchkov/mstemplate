var Modeler = require("../Modeler.js");
var className = 'TypeCustomSupplierPartyReferenceType';

var TypeCustomSupplierPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSupplierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupplierPartyReferenceType",
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
	  CustomSupplierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupplierPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSupplierPartyReferenceType;
Modeler.register(TypeCustomSupplierPartyReferenceType, "TypeCustomSupplierPartyReferenceType");
