var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesOpportunityReferenceType';

var TypeCustomSalesOpportunityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesOpportunityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOpportunityReferenceType",
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
	  CustomSalesOpportunityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOpportunityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesOpportunityReferenceType;
Modeler.register(TypeCustomSalesOpportunityReferenceType, "TypeCustomSalesOpportunityReferenceType");
