var Modeler = require("../Modeler.js");
var className = 'TypeCustomPOSupplierPartyReferenceType';

var TypeCustomPOSupplierPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPOSupplierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPOSupplierPartyReferenceType",
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
	  CustomPOSupplierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPOSupplierPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPOSupplierPartyReferenceType;
Modeler.register(TypeCustomPOSupplierPartyReferenceType, "TypeCustomPOSupplierPartyReferenceType");
