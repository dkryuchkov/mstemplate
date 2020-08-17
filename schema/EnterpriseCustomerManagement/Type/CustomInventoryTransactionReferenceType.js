var Modeler = require("../Modeler.js");
var className = 'TypeCustomInventoryTransactionReferenceType';

var TypeCustomInventoryTransactionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInventoryTransactionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInventoryTransactionReferenceType",
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
	  CustomInventoryTransactionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInventoryTransactionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInventoryTransactionReferenceType;
Modeler.register(TypeCustomInventoryTransactionReferenceType, "TypeCustomInventoryTransactionReferenceType");
