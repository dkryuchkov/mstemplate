var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequisitionDistributionReferenceType';

var TypeCustomRequisitionDistributionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequisitionDistributionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequisitionDistributionReferenceType",
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
	  CustomRequisitionDistributionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequisitionDistributionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequisitionDistributionReferenceType;
Modeler.register(TypeCustomRequisitionDistributionReferenceType, "TypeCustomRequisitionDistributionReferenceType");
