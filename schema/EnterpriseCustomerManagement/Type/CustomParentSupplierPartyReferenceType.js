var Modeler = require("../Modeler.js");
var className = 'TypeCustomParentSupplierPartyReferenceType';

var TypeCustomParentSupplierPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomParentSupplierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentSupplierPartyReferenceType",
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
	  CustomParentSupplierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentSupplierPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomParentSupplierPartyReferenceType;
Modeler.register(TypeCustomParentSupplierPartyReferenceType, "TypeCustomParentSupplierPartyReferenceType");
