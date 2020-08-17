var Modeler = require("../Modeler.js");
var className = 'TypeCustomAccountingEntryReferenceType';

var TypeCustomAccountingEntryReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAccountingEntryReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountingEntryReferenceType",
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
	  CustomAccountingEntryReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountingEntryReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAccountingEntryReferenceType;
Modeler.register(TypeCustomAccountingEntryReferenceType, "TypeCustomAccountingEntryReferenceType");
