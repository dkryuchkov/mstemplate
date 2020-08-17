var Modeler = require("../Modeler.js");
var className = 'TypeCustomSettlementReferenceType';

var TypeCustomSettlementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSettlementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSettlementReferenceType",
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
	  CustomSettlementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSettlementReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSettlementReferenceType;
Modeler.register(TypeCustomSettlementReferenceType, "TypeCustomSettlementReferenceType");
